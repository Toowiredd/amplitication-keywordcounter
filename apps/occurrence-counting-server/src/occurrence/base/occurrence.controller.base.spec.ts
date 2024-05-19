import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { OccurrenceController } from "../occurrence.controller";
import { OccurrenceService } from "../occurrence.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  category: "exampleCategory",
  count: 42,
  createdAt: new Date(),
  description: "exampleDescription",
  detectionId: "exampleDetectionId",
  id: "exampleId",
  timestamp: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  category: "exampleCategory",
  count: 42,
  createdAt: new Date(),
  description: "exampleDescription",
  detectionId: "exampleDetectionId",
  id: "exampleId",
  timestamp: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    category: "exampleCategory",
    count: 42,
    createdAt: new Date(),
    description: "exampleDescription",
    detectionId: "exampleDetectionId",
    id: "exampleId",
    timestamp: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  category: "exampleCategory",
  count: 42,
  createdAt: new Date(),
  description: "exampleDescription",
  detectionId: "exampleDetectionId",
  id: "exampleId",
  timestamp: new Date(),
  updatedAt: new Date(),
};

const service = {
  createOccurrence() {
    return CREATE_RESULT;
  },
  occurrences: () => FIND_MANY_RESULT,
  occurrence: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Occurrence", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OccurrenceService,
          useValue: service,
        },
      ],
      controllers: [OccurrenceController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /occurrences", async () => {
    await request(app.getHttpServer())
      .post("/occurrences")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        timestamp: CREATE_RESULT.timestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /occurrences", async () => {
    await request(app.getHttpServer())
      .get("/occurrences")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          timestamp: FIND_MANY_RESULT[0].timestamp.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /occurrences/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/occurrences"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /occurrences/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/occurrences"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        timestamp: FIND_ONE_RESULT.timestamp.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /occurrences existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/occurrences")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        timestamp: CREATE_RESULT.timestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/occurrences")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});