
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model StatusHistory
 * 
 */
export type StatusHistory = $Result.DefaultSelection<Prisma.$StatusHistoryPayload>
/**
 * Model AiInterview
 * 
 */
export type AiInterview = $Result.DefaultSelection<Prisma.$AiInterviewPayload>
/**
 * Model AiInterviewQuestion
 * 
 */
export type AiInterviewQuestion = $Result.DefaultSelection<Prisma.$AiInterviewQuestionPayload>
/**
 * Model Reminder
 * 
 */
export type Reminder = $Result.DefaultSelection<Prisma.$ReminderPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ApplicationStatus: {
  APPLIED: 'APPLIED',
  SCREENING: 'SCREENING',
  INTERVIEW: 'INTERVIEW',
  ASSIGNMENT: 'ASSIGNMENT',
  OFFER: 'OFFER',
  REJECTED: 'REJECTED'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]


export const ApplicationSource: {
  LINKED_IN: 'LINKED_IN',
  NAUKARI: 'NAUKARI',
  REFERAL: 'REFERAL',
  COLDEMAIL: 'COLDEMAIL',
  SOCIAL_MEDIA: 'SOCIAL_MEDIA',
  OTHER_JOB_APPS: 'OTHER_JOB_APPS'
};

export type ApplicationSource = (typeof ApplicationSource)[keyof typeof ApplicationSource]

}

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

export type ApplicationSource = $Enums.ApplicationSource

export const ApplicationSource: typeof $Enums.ApplicationSource

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs>;

  /**
   * `prisma.statusHistory`: Exposes CRUD operations for the **StatusHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatusHistories
    * const statusHistories = await prisma.statusHistory.findMany()
    * ```
    */
  get statusHistory(): Prisma.StatusHistoryDelegate<ExtArgs>;

  /**
   * `prisma.aiInterview`: Exposes CRUD operations for the **AiInterview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiInterviews
    * const aiInterviews = await prisma.aiInterview.findMany()
    * ```
    */
  get aiInterview(): Prisma.AiInterviewDelegate<ExtArgs>;

  /**
   * `prisma.aiInterviewQuestion`: Exposes CRUD operations for the **AiInterviewQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiInterviewQuestions
    * const aiInterviewQuestions = await prisma.aiInterviewQuestion.findMany()
    * ```
    */
  get aiInterviewQuestion(): Prisma.AiInterviewQuestionDelegate<ExtArgs>;

  /**
   * `prisma.reminder`: Exposes CRUD operations for the **Reminder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reminders
    * const reminders = await prisma.reminder.findMany()
    * ```
    */
  get reminder(): Prisma.ReminderDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Application: 'Application',
    StatusHistory: 'StatusHistory',
    AiInterview: 'AiInterview',
    AiInterviewQuestion: 'AiInterviewQuestion',
    Reminder: 'Reminder'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "application" | "statusHistory" | "aiInterview" | "aiInterviewQuestion" | "reminder"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      StatusHistory: {
        payload: Prisma.$StatusHistoryPayload<ExtArgs>
        fields: Prisma.StatusHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryPayload>
          }
          findFirst: {
            args: Prisma.StatusHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryPayload>
          }
          findMany: {
            args: Prisma.StatusHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryPayload>[]
          }
          create: {
            args: Prisma.StatusHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryPayload>
          }
          createMany: {
            args: Prisma.StatusHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryPayload>[]
          }
          delete: {
            args: Prisma.StatusHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryPayload>
          }
          update: {
            args: Prisma.StatusHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryPayload>
          }
          deleteMany: {
            args: Prisma.StatusHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StatusHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusHistoryPayload>
          }
          aggregate: {
            args: Prisma.StatusHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatusHistory>
          }
          groupBy: {
            args: Prisma.StatusHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<StatusHistoryCountAggregateOutputType> | number
          }
        }
      }
      AiInterview: {
        payload: Prisma.$AiInterviewPayload<ExtArgs>
        fields: Prisma.AiInterviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiInterviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiInterviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewPayload>
          }
          findFirst: {
            args: Prisma.AiInterviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiInterviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewPayload>
          }
          findMany: {
            args: Prisma.AiInterviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewPayload>[]
          }
          create: {
            args: Prisma.AiInterviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewPayload>
          }
          createMany: {
            args: Prisma.AiInterviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiInterviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewPayload>[]
          }
          delete: {
            args: Prisma.AiInterviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewPayload>
          }
          update: {
            args: Prisma.AiInterviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewPayload>
          }
          deleteMany: {
            args: Prisma.AiInterviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiInterviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AiInterviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewPayload>
          }
          aggregate: {
            args: Prisma.AiInterviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiInterview>
          }
          groupBy: {
            args: Prisma.AiInterviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiInterviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiInterviewCountArgs<ExtArgs>
            result: $Utils.Optional<AiInterviewCountAggregateOutputType> | number
          }
        }
      }
      AiInterviewQuestion: {
        payload: Prisma.$AiInterviewQuestionPayload<ExtArgs>
        fields: Prisma.AiInterviewQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiInterviewQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiInterviewQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewQuestionPayload>
          }
          findFirst: {
            args: Prisma.AiInterviewQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiInterviewQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewQuestionPayload>
          }
          findMany: {
            args: Prisma.AiInterviewQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewQuestionPayload>[]
          }
          create: {
            args: Prisma.AiInterviewQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewQuestionPayload>
          }
          createMany: {
            args: Prisma.AiInterviewQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiInterviewQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewQuestionPayload>[]
          }
          delete: {
            args: Prisma.AiInterviewQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewQuestionPayload>
          }
          update: {
            args: Prisma.AiInterviewQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewQuestionPayload>
          }
          deleteMany: {
            args: Prisma.AiInterviewQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiInterviewQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AiInterviewQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiInterviewQuestionPayload>
          }
          aggregate: {
            args: Prisma.AiInterviewQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiInterviewQuestion>
          }
          groupBy: {
            args: Prisma.AiInterviewQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiInterviewQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiInterviewQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<AiInterviewQuestionCountAggregateOutputType> | number
          }
        }
      }
      Reminder: {
        payload: Prisma.$ReminderPayload<ExtArgs>
        fields: Prisma.ReminderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReminderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReminderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findFirst: {
            args: Prisma.ReminderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReminderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findMany: {
            args: Prisma.ReminderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          create: {
            args: Prisma.ReminderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          createMany: {
            args: Prisma.ReminderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReminderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          delete: {
            args: Prisma.ReminderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          update: {
            args: Prisma.ReminderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          deleteMany: {
            args: Prisma.ReminderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReminderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReminderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          aggregate: {
            args: Prisma.ReminderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminder>
          }
          groupBy: {
            args: Prisma.ReminderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReminderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReminderCountArgs<ExtArgs>
            result: $Utils.Optional<ReminderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    applications: number
    reminders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | UserCountOutputTypeCountApplicationsArgs
    reminders?: boolean | UserCountOutputTypeCountRemindersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
  }


  /**
   * Count Type ApplicationCountOutputType
   */

  export type ApplicationCountOutputType = {
    aiInterviews: number
    reminders: number
    statusHistory: number
  }

  export type ApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiInterviews?: boolean | ApplicationCountOutputTypeCountAiInterviewsArgs
    reminders?: boolean | ApplicationCountOutputTypeCountRemindersArgs
    statusHistory?: boolean | ApplicationCountOutputTypeCountStatusHistoryArgs
  }

  // Custom InputTypes
  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationCountOutputType
     */
    select?: ApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountAiInterviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiInterviewWhereInput
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountStatusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusHistoryWhereInput
  }


  /**
   * Count Type AiInterviewCountOutputType
   */

  export type AiInterviewCountOutputType = {
    questions: number
  }

  export type AiInterviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | AiInterviewCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * AiInterviewCountOutputType without action
   */
  export type AiInterviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterviewCountOutputType
     */
    select?: AiInterviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AiInterviewCountOutputType without action
   */
  export type AiInterviewCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiInterviewQuestionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    name: string | null
    email: string | null
    profilePicture: string | null
    targetRole: string | null
    experienceLevel: string | null
    resumeUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    name: string | null
    email: string | null
    profilePicture: string | null
    targetRole: string | null
    experienceLevel: string | null
    resumeUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    name: number
    email: number
    profilePicture: number
    targetRole: number
    experienceLevel: number
    resumeUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    profilePicture?: true
    targetRole?: true
    experienceLevel?: true
    resumeUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    profilePicture?: true
    targetRole?: true
    experienceLevel?: true
    resumeUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    profilePicture?: true
    targetRole?: true
    experienceLevel?: true
    resumeUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    name: string
    email: string
    profilePicture: string | null
    targetRole: string | null
    experienceLevel: string | null
    resumeUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    profilePicture?: boolean
    targetRole?: boolean
    experienceLevel?: boolean
    resumeUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applications?: boolean | User$applicationsArgs<ExtArgs>
    reminders?: boolean | User$remindersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    profilePicture?: boolean
    targetRole?: boolean
    experienceLevel?: boolean
    resumeUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    profilePicture?: boolean
    targetRole?: boolean
    experienceLevel?: boolean
    resumeUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | User$applicationsArgs<ExtArgs>
    reminders?: boolean | User$remindersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      reminders: Prisma.$ReminderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      name: string
      email: string
      profilePicture: string | null
      targetRole: string | null
      experienceLevel: string | null
      resumeUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends User$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany"> | Null>
    reminders<T extends User$remindersArgs<ExtArgs> = {}>(args?: Subset<T, User$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly targetRole: FieldRef<"User", 'String'>
    readonly experienceLevel: FieldRef<"User", 'String'>
    readonly resumeUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.applications
   */
  export type User$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * User.reminders
   */
  export type User$remindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    cursor?: ReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    companyName: string | null
    jobTitle: string | null
    jobDescription: string | null
    status: $Enums.ApplicationStatus | null
    source: $Enums.ApplicationSource | null
    dateApplied: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    companyName: string | null
    jobTitle: string | null
    jobDescription: string | null
    status: $Enums.ApplicationStatus | null
    source: $Enums.ApplicationSource | null
    dateApplied: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    companyName: number
    jobTitle: number
    jobDescription: number
    status: number
    source: number
    dateApplied: number
    notes: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ApplicationMinAggregateInputType = {
    id?: true
    companyName?: true
    jobTitle?: true
    jobDescription?: true
    status?: true
    source?: true
    dateApplied?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    companyName?: true
    jobTitle?: true
    jobDescription?: true
    status?: true
    source?: true
    dateApplied?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    companyName?: true
    jobTitle?: true
    jobDescription?: true
    status?: true
    source?: true
    dateApplied?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    companyName: string
    jobTitle: string
    jobDescription: string
    status: $Enums.ApplicationStatus
    source: $Enums.ApplicationSource
    dateApplied: Date
    notes: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    jobTitle?: boolean
    jobDescription?: boolean
    status?: boolean
    source?: boolean
    dateApplied?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    aiInterviews?: boolean | Application$aiInterviewsArgs<ExtArgs>
    reminders?: boolean | Application$remindersArgs<ExtArgs>
    statusHistory?: boolean | Application$statusHistoryArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    jobTitle?: boolean
    jobDescription?: boolean
    status?: boolean
    source?: boolean
    dateApplied?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    companyName?: boolean
    jobTitle?: boolean
    jobDescription?: boolean
    status?: boolean
    source?: boolean
    dateApplied?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    aiInterviews?: boolean | Application$aiInterviewsArgs<ExtArgs>
    reminders?: boolean | Application$remindersArgs<ExtArgs>
    statusHistory?: boolean | Application$statusHistoryArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      aiInterviews: Prisma.$AiInterviewPayload<ExtArgs>[]
      reminders: Prisma.$ReminderPayload<ExtArgs>[]
      statusHistory: Prisma.$StatusHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyName: string
      jobTitle: string
      jobDescription: string
      status: $Enums.ApplicationStatus
      source: $Enums.ApplicationSource
      dateApplied: Date
      notes: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    aiInterviews<T extends Application$aiInterviewsArgs<ExtArgs> = {}>(args?: Subset<T, Application$aiInterviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiInterviewPayload<ExtArgs>, T, "findMany"> | Null>
    reminders<T extends Application$remindersArgs<ExtArgs> = {}>(args?: Subset<T, Application$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany"> | Null>
    statusHistory<T extends Application$statusHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Application$statusHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Application model
   */ 
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'String'>
    readonly companyName: FieldRef<"Application", 'String'>
    readonly jobTitle: FieldRef<"Application", 'String'>
    readonly jobDescription: FieldRef<"Application", 'String'>
    readonly status: FieldRef<"Application", 'ApplicationStatus'>
    readonly source: FieldRef<"Application", 'ApplicationSource'>
    readonly dateApplied: FieldRef<"Application", 'DateTime'>
    readonly notes: FieldRef<"Application", 'String'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
    readonly updatedAt: FieldRef<"Application", 'DateTime'>
    readonly userId: FieldRef<"Application", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
  }

  /**
   * Application.aiInterviews
   */
  export type Application$aiInterviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterview
     */
    select?: AiInterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewInclude<ExtArgs> | null
    where?: AiInterviewWhereInput
    orderBy?: AiInterviewOrderByWithRelationInput | AiInterviewOrderByWithRelationInput[]
    cursor?: AiInterviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiInterviewScalarFieldEnum | AiInterviewScalarFieldEnum[]
  }

  /**
   * Application.reminders
   */
  export type Application$remindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    cursor?: ReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Application.statusHistory
   */
  export type Application$statusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    where?: StatusHistoryWhereInput
    orderBy?: StatusHistoryOrderByWithRelationInput | StatusHistoryOrderByWithRelationInput[]
    cursor?: StatusHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatusHistoryScalarFieldEnum | StatusHistoryScalarFieldEnum[]
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model StatusHistory
   */

  export type AggregateStatusHistory = {
    _count: StatusHistoryCountAggregateOutputType | null
    _min: StatusHistoryMinAggregateOutputType | null
    _max: StatusHistoryMaxAggregateOutputType | null
  }

  export type StatusHistoryMinAggregateOutputType = {
    id: string | null
    applicationId: string | null
    status: $Enums.ApplicationStatus | null
    createdAt: Date | null
  }

  export type StatusHistoryMaxAggregateOutputType = {
    id: string | null
    applicationId: string | null
    status: $Enums.ApplicationStatus | null
    createdAt: Date | null
  }

  export type StatusHistoryCountAggregateOutputType = {
    id: number
    applicationId: number
    status: number
    createdAt: number
    _all: number
  }


  export type StatusHistoryMinAggregateInputType = {
    id?: true
    applicationId?: true
    status?: true
    createdAt?: true
  }

  export type StatusHistoryMaxAggregateInputType = {
    id?: true
    applicationId?: true
    status?: true
    createdAt?: true
  }

  export type StatusHistoryCountAggregateInputType = {
    id?: true
    applicationId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type StatusHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusHistory to aggregate.
     */
    where?: StatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusHistories to fetch.
     */
    orderBy?: StatusHistoryOrderByWithRelationInput | StatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatusHistories
    **/
    _count?: true | StatusHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusHistoryMaxAggregateInputType
  }

  export type GetStatusHistoryAggregateType<T extends StatusHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStatusHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatusHistory[P]>
      : GetScalarType<T[P], AggregateStatusHistory[P]>
  }




  export type StatusHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusHistoryWhereInput
    orderBy?: StatusHistoryOrderByWithAggregationInput | StatusHistoryOrderByWithAggregationInput[]
    by: StatusHistoryScalarFieldEnum[] | StatusHistoryScalarFieldEnum
    having?: StatusHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusHistoryCountAggregateInputType | true
    _min?: StatusHistoryMinAggregateInputType
    _max?: StatusHistoryMaxAggregateInputType
  }

  export type StatusHistoryGroupByOutputType = {
    id: string
    applicationId: string
    status: $Enums.ApplicationStatus
    createdAt: Date
    _count: StatusHistoryCountAggregateOutputType | null
    _min: StatusHistoryMinAggregateOutputType | null
    _max: StatusHistoryMaxAggregateOutputType | null
  }

  type GetStatusHistoryGroupByPayload<T extends StatusHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], StatusHistoryGroupByOutputType[P]>
        }
      >
    >


  export type StatusHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    status?: boolean
    createdAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusHistory"]>

  export type StatusHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    status?: boolean
    createdAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusHistory"]>

  export type StatusHistorySelectScalar = {
    id?: boolean
    applicationId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type StatusHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type StatusHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }

  export type $StatusHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatusHistory"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationId: string
      status: $Enums.ApplicationStatus
      createdAt: Date
    }, ExtArgs["result"]["statusHistory"]>
    composites: {}
  }

  type StatusHistoryGetPayload<S extends boolean | null | undefined | StatusHistoryDefaultArgs> = $Result.GetResult<Prisma.$StatusHistoryPayload, S>

  type StatusHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StatusHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StatusHistoryCountAggregateInputType | true
    }

  export interface StatusHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatusHistory'], meta: { name: 'StatusHistory' } }
    /**
     * Find zero or one StatusHistory that matches the filter.
     * @param {StatusHistoryFindUniqueArgs} args - Arguments to find a StatusHistory
     * @example
     * // Get one StatusHistory
     * const statusHistory = await prisma.statusHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusHistoryFindUniqueArgs>(args: SelectSubset<T, StatusHistoryFindUniqueArgs<ExtArgs>>): Prisma__StatusHistoryClient<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StatusHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StatusHistoryFindUniqueOrThrowArgs} args - Arguments to find a StatusHistory
     * @example
     * // Get one StatusHistory
     * const statusHistory = await prisma.statusHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusHistoryClient<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StatusHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryFindFirstArgs} args - Arguments to find a StatusHistory
     * @example
     * // Get one StatusHistory
     * const statusHistory = await prisma.statusHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusHistoryFindFirstArgs>(args?: SelectSubset<T, StatusHistoryFindFirstArgs<ExtArgs>>): Prisma__StatusHistoryClient<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StatusHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryFindFirstOrThrowArgs} args - Arguments to find a StatusHistory
     * @example
     * // Get one StatusHistory
     * const statusHistory = await prisma.statusHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusHistoryClient<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StatusHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusHistories
     * const statusHistories = await prisma.statusHistory.findMany()
     * 
     * // Get first 10 StatusHistories
     * const statusHistories = await prisma.statusHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusHistoryWithIdOnly = await prisma.statusHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusHistoryFindManyArgs>(args?: SelectSubset<T, StatusHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StatusHistory.
     * @param {StatusHistoryCreateArgs} args - Arguments to create a StatusHistory.
     * @example
     * // Create one StatusHistory
     * const StatusHistory = await prisma.statusHistory.create({
     *   data: {
     *     // ... data to create a StatusHistory
     *   }
     * })
     * 
     */
    create<T extends StatusHistoryCreateArgs>(args: SelectSubset<T, StatusHistoryCreateArgs<ExtArgs>>): Prisma__StatusHistoryClient<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StatusHistories.
     * @param {StatusHistoryCreateManyArgs} args - Arguments to create many StatusHistories.
     * @example
     * // Create many StatusHistories
     * const statusHistory = await prisma.statusHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusHistoryCreateManyArgs>(args?: SelectSubset<T, StatusHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StatusHistories and returns the data saved in the database.
     * @param {StatusHistoryCreateManyAndReturnArgs} args - Arguments to create many StatusHistories.
     * @example
     * // Create many StatusHistories
     * const statusHistory = await prisma.statusHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StatusHistories and only return the `id`
     * const statusHistoryWithIdOnly = await prisma.statusHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StatusHistory.
     * @param {StatusHistoryDeleteArgs} args - Arguments to delete one StatusHistory.
     * @example
     * // Delete one StatusHistory
     * const StatusHistory = await prisma.statusHistory.delete({
     *   where: {
     *     // ... filter to delete one StatusHistory
     *   }
     * })
     * 
     */
    delete<T extends StatusHistoryDeleteArgs>(args: SelectSubset<T, StatusHistoryDeleteArgs<ExtArgs>>): Prisma__StatusHistoryClient<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StatusHistory.
     * @param {StatusHistoryUpdateArgs} args - Arguments to update one StatusHistory.
     * @example
     * // Update one StatusHistory
     * const statusHistory = await prisma.statusHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusHistoryUpdateArgs>(args: SelectSubset<T, StatusHistoryUpdateArgs<ExtArgs>>): Prisma__StatusHistoryClient<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StatusHistories.
     * @param {StatusHistoryDeleteManyArgs} args - Arguments to filter StatusHistories to delete.
     * @example
     * // Delete a few StatusHistories
     * const { count } = await prisma.statusHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusHistoryDeleteManyArgs>(args?: SelectSubset<T, StatusHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusHistories
     * const statusHistory = await prisma.statusHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusHistoryUpdateManyArgs>(args: SelectSubset<T, StatusHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StatusHistory.
     * @param {StatusHistoryUpsertArgs} args - Arguments to update or create a StatusHistory.
     * @example
     * // Update or create a StatusHistory
     * const statusHistory = await prisma.statusHistory.upsert({
     *   create: {
     *     // ... data to create a StatusHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusHistory we want to update
     *   }
     * })
     */
    upsert<T extends StatusHistoryUpsertArgs>(args: SelectSubset<T, StatusHistoryUpsertArgs<ExtArgs>>): Prisma__StatusHistoryClient<$Result.GetResult<Prisma.$StatusHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryCountArgs} args - Arguments to filter StatusHistories to count.
     * @example
     * // Count the number of StatusHistories
     * const count = await prisma.statusHistory.count({
     *   where: {
     *     // ... the filter for the StatusHistories we want to count
     *   }
     * })
    **/
    count<T extends StatusHistoryCountArgs>(
      args?: Subset<T, StatusHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusHistoryAggregateArgs>(args: Subset<T, StatusHistoryAggregateArgs>): Prisma.PrismaPromise<GetStatusHistoryAggregateType<T>>

    /**
     * Group by StatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusHistoryGroupByArgs['orderBy'] }
        : { orderBy?: StatusHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatusHistory model
   */
  readonly fields: StatusHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatusHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StatusHistory model
   */ 
  interface StatusHistoryFieldRefs {
    readonly id: FieldRef<"StatusHistory", 'String'>
    readonly applicationId: FieldRef<"StatusHistory", 'String'>
    readonly status: FieldRef<"StatusHistory", 'ApplicationStatus'>
    readonly createdAt: FieldRef<"StatusHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StatusHistory findUnique
   */
  export type StatusHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StatusHistory to fetch.
     */
    where: StatusHistoryWhereUniqueInput
  }

  /**
   * StatusHistory findUniqueOrThrow
   */
  export type StatusHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StatusHistory to fetch.
     */
    where: StatusHistoryWhereUniqueInput
  }

  /**
   * StatusHistory findFirst
   */
  export type StatusHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StatusHistory to fetch.
     */
    where?: StatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusHistories to fetch.
     */
    orderBy?: StatusHistoryOrderByWithRelationInput | StatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusHistories.
     */
    cursor?: StatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusHistories.
     */
    distinct?: StatusHistoryScalarFieldEnum | StatusHistoryScalarFieldEnum[]
  }

  /**
   * StatusHistory findFirstOrThrow
   */
  export type StatusHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StatusHistory to fetch.
     */
    where?: StatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusHistories to fetch.
     */
    orderBy?: StatusHistoryOrderByWithRelationInput | StatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusHistories.
     */
    cursor?: StatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusHistories.
     */
    distinct?: StatusHistoryScalarFieldEnum | StatusHistoryScalarFieldEnum[]
  }

  /**
   * StatusHistory findMany
   */
  export type StatusHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StatusHistories to fetch.
     */
    where?: StatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusHistories to fetch.
     */
    orderBy?: StatusHistoryOrderByWithRelationInput | StatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatusHistories.
     */
    cursor?: StatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusHistories.
     */
    skip?: number
    distinct?: StatusHistoryScalarFieldEnum | StatusHistoryScalarFieldEnum[]
  }

  /**
   * StatusHistory create
   */
  export type StatusHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a StatusHistory.
     */
    data: XOR<StatusHistoryCreateInput, StatusHistoryUncheckedCreateInput>
  }

  /**
   * StatusHistory createMany
   */
  export type StatusHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusHistories.
     */
    data: StatusHistoryCreateManyInput | StatusHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusHistory createManyAndReturn
   */
  export type StatusHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StatusHistories.
     */
    data: StatusHistoryCreateManyInput | StatusHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StatusHistory update
   */
  export type StatusHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a StatusHistory.
     */
    data: XOR<StatusHistoryUpdateInput, StatusHistoryUncheckedUpdateInput>
    /**
     * Choose, which StatusHistory to update.
     */
    where: StatusHistoryWhereUniqueInput
  }

  /**
   * StatusHistory updateMany
   */
  export type StatusHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusHistories.
     */
    data: XOR<StatusHistoryUpdateManyMutationInput, StatusHistoryUncheckedUpdateManyInput>
    /**
     * Filter which StatusHistories to update
     */
    where?: StatusHistoryWhereInput
  }

  /**
   * StatusHistory upsert
   */
  export type StatusHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the StatusHistory to update in case it exists.
     */
    where: StatusHistoryWhereUniqueInput
    /**
     * In case the StatusHistory found by the `where` argument doesn't exist, create a new StatusHistory with this data.
     */
    create: XOR<StatusHistoryCreateInput, StatusHistoryUncheckedCreateInput>
    /**
     * In case the StatusHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusHistoryUpdateInput, StatusHistoryUncheckedUpdateInput>
  }

  /**
   * StatusHistory delete
   */
  export type StatusHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
    /**
     * Filter which StatusHistory to delete.
     */
    where: StatusHistoryWhereUniqueInput
  }

  /**
   * StatusHistory deleteMany
   */
  export type StatusHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusHistories to delete
     */
    where?: StatusHistoryWhereInput
  }

  /**
   * StatusHistory without action
   */
  export type StatusHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusHistory
     */
    select?: StatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusHistoryInclude<ExtArgs> | null
  }


  /**
   * Model AiInterview
   */

  export type AggregateAiInterview = {
    _count: AiInterviewCountAggregateOutputType | null
    _avg: AiInterviewAvgAggregateOutputType | null
    _sum: AiInterviewSumAggregateOutputType | null
    _min: AiInterviewMinAggregateOutputType | null
    _max: AiInterviewMaxAggregateOutputType | null
  }

  export type AiInterviewAvgAggregateOutputType = {
    overallScore: number | null
  }

  export type AiInterviewSumAggregateOutputType = {
    overallScore: number | null
  }

  export type AiInterviewMinAggregateOutputType = {
    id: string | null
    applicationId: string | null
    overallScore: number | null
    overallFeedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiInterviewMaxAggregateOutputType = {
    id: string | null
    applicationId: string | null
    overallScore: number | null
    overallFeedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiInterviewCountAggregateOutputType = {
    id: number
    applicationId: number
    overallScore: number
    overallFeedback: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AiInterviewAvgAggregateInputType = {
    overallScore?: true
  }

  export type AiInterviewSumAggregateInputType = {
    overallScore?: true
  }

  export type AiInterviewMinAggregateInputType = {
    id?: true
    applicationId?: true
    overallScore?: true
    overallFeedback?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiInterviewMaxAggregateInputType = {
    id?: true
    applicationId?: true
    overallScore?: true
    overallFeedback?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiInterviewCountAggregateInputType = {
    id?: true
    applicationId?: true
    overallScore?: true
    overallFeedback?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AiInterviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiInterview to aggregate.
     */
    where?: AiInterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInterviews to fetch.
     */
    orderBy?: AiInterviewOrderByWithRelationInput | AiInterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiInterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInterviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInterviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiInterviews
    **/
    _count?: true | AiInterviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AiInterviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AiInterviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiInterviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiInterviewMaxAggregateInputType
  }

  export type GetAiInterviewAggregateType<T extends AiInterviewAggregateArgs> = {
        [P in keyof T & keyof AggregateAiInterview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiInterview[P]>
      : GetScalarType<T[P], AggregateAiInterview[P]>
  }




  export type AiInterviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiInterviewWhereInput
    orderBy?: AiInterviewOrderByWithAggregationInput | AiInterviewOrderByWithAggregationInput[]
    by: AiInterviewScalarFieldEnum[] | AiInterviewScalarFieldEnum
    having?: AiInterviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiInterviewCountAggregateInputType | true
    _avg?: AiInterviewAvgAggregateInputType
    _sum?: AiInterviewSumAggregateInputType
    _min?: AiInterviewMinAggregateInputType
    _max?: AiInterviewMaxAggregateInputType
  }

  export type AiInterviewGroupByOutputType = {
    id: string
    applicationId: string
    overallScore: number | null
    overallFeedback: string | null
    createdAt: Date
    updatedAt: Date
    _count: AiInterviewCountAggregateOutputType | null
    _avg: AiInterviewAvgAggregateOutputType | null
    _sum: AiInterviewSumAggregateOutputType | null
    _min: AiInterviewMinAggregateOutputType | null
    _max: AiInterviewMaxAggregateOutputType | null
  }

  type GetAiInterviewGroupByPayload<T extends AiInterviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiInterviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiInterviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiInterviewGroupByOutputType[P]>
            : GetScalarType<T[P], AiInterviewGroupByOutputType[P]>
        }
      >
    >


  export type AiInterviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    overallScore?: boolean
    overallFeedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    questions?: boolean | AiInterview$questionsArgs<ExtArgs>
    _count?: boolean | AiInterviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiInterview"]>

  export type AiInterviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    overallScore?: boolean
    overallFeedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiInterview"]>

  export type AiInterviewSelectScalar = {
    id?: boolean
    applicationId?: boolean
    overallScore?: boolean
    overallFeedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AiInterviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    questions?: boolean | AiInterview$questionsArgs<ExtArgs>
    _count?: boolean | AiInterviewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AiInterviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }

  export type $AiInterviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiInterview"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
      questions: Prisma.$AiInterviewQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationId: string
      overallScore: number | null
      overallFeedback: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aiInterview"]>
    composites: {}
  }

  type AiInterviewGetPayload<S extends boolean | null | undefined | AiInterviewDefaultArgs> = $Result.GetResult<Prisma.$AiInterviewPayload, S>

  type AiInterviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AiInterviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AiInterviewCountAggregateInputType | true
    }

  export interface AiInterviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiInterview'], meta: { name: 'AiInterview' } }
    /**
     * Find zero or one AiInterview that matches the filter.
     * @param {AiInterviewFindUniqueArgs} args - Arguments to find a AiInterview
     * @example
     * // Get one AiInterview
     * const aiInterview = await prisma.aiInterview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiInterviewFindUniqueArgs>(args: SelectSubset<T, AiInterviewFindUniqueArgs<ExtArgs>>): Prisma__AiInterviewClient<$Result.GetResult<Prisma.$AiInterviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AiInterview that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AiInterviewFindUniqueOrThrowArgs} args - Arguments to find a AiInterview
     * @example
     * // Get one AiInterview
     * const aiInterview = await prisma.aiInterview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiInterviewFindUniqueOrThrowArgs>(args: SelectSubset<T, AiInterviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiInterviewClient<$Result.GetResult<Prisma.$AiInterviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AiInterview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInterviewFindFirstArgs} args - Arguments to find a AiInterview
     * @example
     * // Get one AiInterview
     * const aiInterview = await prisma.aiInterview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiInterviewFindFirstArgs>(args?: SelectSubset<T, AiInterviewFindFirstArgs<ExtArgs>>): Prisma__AiInterviewClient<$Result.GetResult<Prisma.$AiInterviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AiInterview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInterviewFindFirstOrThrowArgs} args - Arguments to find a AiInterview
     * @example
     * // Get one AiInterview
     * const aiInterview = await prisma.aiInterview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiInterviewFindFirstOrThrowArgs>(args?: SelectSubset<T, AiInterviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiInterviewClient<$Result.GetResult<Prisma.$AiInterviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AiInterviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInterviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiInterviews
     * const aiInterviews = await prisma.aiInterview.findMany()
     * 
     * // Get first 10 AiInterviews
     * const aiInterviews = await prisma.aiInterview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiInterviewWithIdOnly = await prisma.aiInterview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiInterviewFindManyArgs>(args?: SelectSubset<T, AiInterviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiInterviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AiInterview.
     * @param {AiInterviewCreateArgs} args - Arguments to create a AiInterview.
     * @example
     * // Create one AiInterview
     * const AiInterview = await prisma.aiInterview.create({
     *   data: {
     *     // ... data to create a AiInterview
     *   }
     * })
     * 
     */
    create<T extends AiInterviewCreateArgs>(args: SelectSubset<T, AiInterviewCreateArgs<ExtArgs>>): Prisma__AiInterviewClient<$Result.GetResult<Prisma.$AiInterviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AiInterviews.
     * @param {AiInterviewCreateManyArgs} args - Arguments to create many AiInterviews.
     * @example
     * // Create many AiInterviews
     * const aiInterview = await prisma.aiInterview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiInterviewCreateManyArgs>(args?: SelectSubset<T, AiInterviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiInterviews and returns the data saved in the database.
     * @param {AiInterviewCreateManyAndReturnArgs} args - Arguments to create many AiInterviews.
     * @example
     * // Create many AiInterviews
     * const aiInterview = await prisma.aiInterview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiInterviews and only return the `id`
     * const aiInterviewWithIdOnly = await prisma.aiInterview.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiInterviewCreateManyAndReturnArgs>(args?: SelectSubset<T, AiInterviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiInterviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AiInterview.
     * @param {AiInterviewDeleteArgs} args - Arguments to delete one AiInterview.
     * @example
     * // Delete one AiInterview
     * const AiInterview = await prisma.aiInterview.delete({
     *   where: {
     *     // ... filter to delete one AiInterview
     *   }
     * })
     * 
     */
    delete<T extends AiInterviewDeleteArgs>(args: SelectSubset<T, AiInterviewDeleteArgs<ExtArgs>>): Prisma__AiInterviewClient<$Result.GetResult<Prisma.$AiInterviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AiInterview.
     * @param {AiInterviewUpdateArgs} args - Arguments to update one AiInterview.
     * @example
     * // Update one AiInterview
     * const aiInterview = await prisma.aiInterview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiInterviewUpdateArgs>(args: SelectSubset<T, AiInterviewUpdateArgs<ExtArgs>>): Prisma__AiInterviewClient<$Result.GetResult<Prisma.$AiInterviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AiInterviews.
     * @param {AiInterviewDeleteManyArgs} args - Arguments to filter AiInterviews to delete.
     * @example
     * // Delete a few AiInterviews
     * const { count } = await prisma.aiInterview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiInterviewDeleteManyArgs>(args?: SelectSubset<T, AiInterviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiInterviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInterviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiInterviews
     * const aiInterview = await prisma.aiInterview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiInterviewUpdateManyArgs>(args: SelectSubset<T, AiInterviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AiInterview.
     * @param {AiInterviewUpsertArgs} args - Arguments to update or create a AiInterview.
     * @example
     * // Update or create a AiInterview
     * const aiInterview = await prisma.aiInterview.upsert({
     *   create: {
     *     // ... data to create a AiInterview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiInterview we want to update
     *   }
     * })
     */
    upsert<T extends AiInterviewUpsertArgs>(args: SelectSubset<T, AiInterviewUpsertArgs<ExtArgs>>): Prisma__AiInterviewClient<$Result.GetResult<Prisma.$AiInterviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AiInterviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInterviewCountArgs} args - Arguments to filter AiInterviews to count.
     * @example
     * // Count the number of AiInterviews
     * const count = await prisma.aiInterview.count({
     *   where: {
     *     // ... the filter for the AiInterviews we want to count
     *   }
     * })
    **/
    count<T extends AiInterviewCountArgs>(
      args?: Subset<T, AiInterviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiInterviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiInterview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInterviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AiInterviewAggregateArgs>(args: Subset<T, AiInterviewAggregateArgs>): Prisma.PrismaPromise<GetAiInterviewAggregateType<T>>

    /**
     * Group by AiInterview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInterviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AiInterviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiInterviewGroupByArgs['orderBy'] }
        : { orderBy?: AiInterviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AiInterviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiInterviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiInterview model
   */
  readonly fields: AiInterviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiInterview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiInterviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    questions<T extends AiInterview$questionsArgs<ExtArgs> = {}>(args?: Subset<T, AiInterview$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiInterviewQuestionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AiInterview model
   */ 
  interface AiInterviewFieldRefs {
    readonly id: FieldRef<"AiInterview", 'String'>
    readonly applicationId: FieldRef<"AiInterview", 'String'>
    readonly overallScore: FieldRef<"AiInterview", 'Int'>
    readonly overallFeedback: FieldRef<"AiInterview", 'String'>
    readonly createdAt: FieldRef<"AiInterview", 'DateTime'>
    readonly updatedAt: FieldRef<"AiInterview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiInterview findUnique
   */
  export type AiInterviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterview
     */
    select?: AiInterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewInclude<ExtArgs> | null
    /**
     * Filter, which AiInterview to fetch.
     */
    where: AiInterviewWhereUniqueInput
  }

  /**
   * AiInterview findUniqueOrThrow
   */
  export type AiInterviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterview
     */
    select?: AiInterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewInclude<ExtArgs> | null
    /**
     * Filter, which AiInterview to fetch.
     */
    where: AiInterviewWhereUniqueInput
  }

  /**
   * AiInterview findFirst
   */
  export type AiInterviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterview
     */
    select?: AiInterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewInclude<ExtArgs> | null
    /**
     * Filter, which AiInterview to fetch.
     */
    where?: AiInterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInterviews to fetch.
     */
    orderBy?: AiInterviewOrderByWithRelationInput | AiInterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiInterviews.
     */
    cursor?: AiInterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInterviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInterviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiInterviews.
     */
    distinct?: AiInterviewScalarFieldEnum | AiInterviewScalarFieldEnum[]
  }

  /**
   * AiInterview findFirstOrThrow
   */
  export type AiInterviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterview
     */
    select?: AiInterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewInclude<ExtArgs> | null
    /**
     * Filter, which AiInterview to fetch.
     */
    where?: AiInterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInterviews to fetch.
     */
    orderBy?: AiInterviewOrderByWithRelationInput | AiInterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiInterviews.
     */
    cursor?: AiInterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInterviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInterviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiInterviews.
     */
    distinct?: AiInterviewScalarFieldEnum | AiInterviewScalarFieldEnum[]
  }

  /**
   * AiInterview findMany
   */
  export type AiInterviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterview
     */
    select?: AiInterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewInclude<ExtArgs> | null
    /**
     * Filter, which AiInterviews to fetch.
     */
    where?: AiInterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInterviews to fetch.
     */
    orderBy?: AiInterviewOrderByWithRelationInput | AiInterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiInterviews.
     */
    cursor?: AiInterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInterviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInterviews.
     */
    skip?: number
    distinct?: AiInterviewScalarFieldEnum | AiInterviewScalarFieldEnum[]
  }

  /**
   * AiInterview create
   */
  export type AiInterviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterview
     */
    select?: AiInterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewInclude<ExtArgs> | null
    /**
     * The data needed to create a AiInterview.
     */
    data: XOR<AiInterviewCreateInput, AiInterviewUncheckedCreateInput>
  }

  /**
   * AiInterview createMany
   */
  export type AiInterviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiInterviews.
     */
    data: AiInterviewCreateManyInput | AiInterviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiInterview createManyAndReturn
   */
  export type AiInterviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterview
     */
    select?: AiInterviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AiInterviews.
     */
    data: AiInterviewCreateManyInput | AiInterviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiInterview update
   */
  export type AiInterviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterview
     */
    select?: AiInterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewInclude<ExtArgs> | null
    /**
     * The data needed to update a AiInterview.
     */
    data: XOR<AiInterviewUpdateInput, AiInterviewUncheckedUpdateInput>
    /**
     * Choose, which AiInterview to update.
     */
    where: AiInterviewWhereUniqueInput
  }

  /**
   * AiInterview updateMany
   */
  export type AiInterviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiInterviews.
     */
    data: XOR<AiInterviewUpdateManyMutationInput, AiInterviewUncheckedUpdateManyInput>
    /**
     * Filter which AiInterviews to update
     */
    where?: AiInterviewWhereInput
  }

  /**
   * AiInterview upsert
   */
  export type AiInterviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterview
     */
    select?: AiInterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewInclude<ExtArgs> | null
    /**
     * The filter to search for the AiInterview to update in case it exists.
     */
    where: AiInterviewWhereUniqueInput
    /**
     * In case the AiInterview found by the `where` argument doesn't exist, create a new AiInterview with this data.
     */
    create: XOR<AiInterviewCreateInput, AiInterviewUncheckedCreateInput>
    /**
     * In case the AiInterview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiInterviewUpdateInput, AiInterviewUncheckedUpdateInput>
  }

  /**
   * AiInterview delete
   */
  export type AiInterviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterview
     */
    select?: AiInterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewInclude<ExtArgs> | null
    /**
     * Filter which AiInterview to delete.
     */
    where: AiInterviewWhereUniqueInput
  }

  /**
   * AiInterview deleteMany
   */
  export type AiInterviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiInterviews to delete
     */
    where?: AiInterviewWhereInput
  }

  /**
   * AiInterview.questions
   */
  export type AiInterview$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterviewQuestion
     */
    select?: AiInterviewQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewQuestionInclude<ExtArgs> | null
    where?: AiInterviewQuestionWhereInput
    orderBy?: AiInterviewQuestionOrderByWithRelationInput | AiInterviewQuestionOrderByWithRelationInput[]
    cursor?: AiInterviewQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiInterviewQuestionScalarFieldEnum | AiInterviewQuestionScalarFieldEnum[]
  }

  /**
   * AiInterview without action
   */
  export type AiInterviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterview
     */
    select?: AiInterviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewInclude<ExtArgs> | null
  }


  /**
   * Model AiInterviewQuestion
   */

  export type AggregateAiInterviewQuestion = {
    _count: AiInterviewQuestionCountAggregateOutputType | null
    _avg: AiInterviewQuestionAvgAggregateOutputType | null
    _sum: AiInterviewQuestionSumAggregateOutputType | null
    _min: AiInterviewQuestionMinAggregateOutputType | null
    _max: AiInterviewQuestionMaxAggregateOutputType | null
  }

  export type AiInterviewQuestionAvgAggregateOutputType = {
    questionNumber: number | null
  }

  export type AiInterviewQuestionSumAggregateOutputType = {
    questionNumber: number | null
  }

  export type AiInterviewQuestionMinAggregateOutputType = {
    id: string | null
    question: string | null
    userAnswer: string | null
    aiInterviewId: string | null
    questionNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiInterviewQuestionMaxAggregateOutputType = {
    id: string | null
    question: string | null
    userAnswer: string | null
    aiInterviewId: string | null
    questionNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiInterviewQuestionCountAggregateOutputType = {
    id: number
    question: number
    userAnswer: number
    aiInterviewId: number
    questionNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AiInterviewQuestionAvgAggregateInputType = {
    questionNumber?: true
  }

  export type AiInterviewQuestionSumAggregateInputType = {
    questionNumber?: true
  }

  export type AiInterviewQuestionMinAggregateInputType = {
    id?: true
    question?: true
    userAnswer?: true
    aiInterviewId?: true
    questionNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiInterviewQuestionMaxAggregateInputType = {
    id?: true
    question?: true
    userAnswer?: true
    aiInterviewId?: true
    questionNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiInterviewQuestionCountAggregateInputType = {
    id?: true
    question?: true
    userAnswer?: true
    aiInterviewId?: true
    questionNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AiInterviewQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiInterviewQuestion to aggregate.
     */
    where?: AiInterviewQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInterviewQuestions to fetch.
     */
    orderBy?: AiInterviewQuestionOrderByWithRelationInput | AiInterviewQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiInterviewQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInterviewQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInterviewQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiInterviewQuestions
    **/
    _count?: true | AiInterviewQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AiInterviewQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AiInterviewQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiInterviewQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiInterviewQuestionMaxAggregateInputType
  }

  export type GetAiInterviewQuestionAggregateType<T extends AiInterviewQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateAiInterviewQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiInterviewQuestion[P]>
      : GetScalarType<T[P], AggregateAiInterviewQuestion[P]>
  }




  export type AiInterviewQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiInterviewQuestionWhereInput
    orderBy?: AiInterviewQuestionOrderByWithAggregationInput | AiInterviewQuestionOrderByWithAggregationInput[]
    by: AiInterviewQuestionScalarFieldEnum[] | AiInterviewQuestionScalarFieldEnum
    having?: AiInterviewQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiInterviewQuestionCountAggregateInputType | true
    _avg?: AiInterviewQuestionAvgAggregateInputType
    _sum?: AiInterviewQuestionSumAggregateInputType
    _min?: AiInterviewQuestionMinAggregateInputType
    _max?: AiInterviewQuestionMaxAggregateInputType
  }

  export type AiInterviewQuestionGroupByOutputType = {
    id: string
    question: string
    userAnswer: string | null
    aiInterviewId: string
    questionNumber: number
    createdAt: Date
    updatedAt: Date
    _count: AiInterviewQuestionCountAggregateOutputType | null
    _avg: AiInterviewQuestionAvgAggregateOutputType | null
    _sum: AiInterviewQuestionSumAggregateOutputType | null
    _min: AiInterviewQuestionMinAggregateOutputType | null
    _max: AiInterviewQuestionMaxAggregateOutputType | null
  }

  type GetAiInterviewQuestionGroupByPayload<T extends AiInterviewQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiInterviewQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiInterviewQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiInterviewQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], AiInterviewQuestionGroupByOutputType[P]>
        }
      >
    >


  export type AiInterviewQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    userAnswer?: boolean
    aiInterviewId?: boolean
    questionNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiInterview?: boolean | AiInterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiInterviewQuestion"]>

  export type AiInterviewQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    userAnswer?: boolean
    aiInterviewId?: boolean
    questionNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiInterview?: boolean | AiInterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiInterviewQuestion"]>

  export type AiInterviewQuestionSelectScalar = {
    id?: boolean
    question?: boolean
    userAnswer?: boolean
    aiInterviewId?: boolean
    questionNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AiInterviewQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiInterview?: boolean | AiInterviewDefaultArgs<ExtArgs>
  }
  export type AiInterviewQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiInterview?: boolean | AiInterviewDefaultArgs<ExtArgs>
  }

  export type $AiInterviewQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiInterviewQuestion"
    objects: {
      aiInterview: Prisma.$AiInterviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question: string
      userAnswer: string | null
      aiInterviewId: string
      questionNumber: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aiInterviewQuestion"]>
    composites: {}
  }

  type AiInterviewQuestionGetPayload<S extends boolean | null | undefined | AiInterviewQuestionDefaultArgs> = $Result.GetResult<Prisma.$AiInterviewQuestionPayload, S>

  type AiInterviewQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AiInterviewQuestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AiInterviewQuestionCountAggregateInputType | true
    }

  export interface AiInterviewQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiInterviewQuestion'], meta: { name: 'AiInterviewQuestion' } }
    /**
     * Find zero or one AiInterviewQuestion that matches the filter.
     * @param {AiInterviewQuestionFindUniqueArgs} args - Arguments to find a AiInterviewQuestion
     * @example
     * // Get one AiInterviewQuestion
     * const aiInterviewQuestion = await prisma.aiInterviewQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiInterviewQuestionFindUniqueArgs>(args: SelectSubset<T, AiInterviewQuestionFindUniqueArgs<ExtArgs>>): Prisma__AiInterviewQuestionClient<$Result.GetResult<Prisma.$AiInterviewQuestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AiInterviewQuestion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AiInterviewQuestionFindUniqueOrThrowArgs} args - Arguments to find a AiInterviewQuestion
     * @example
     * // Get one AiInterviewQuestion
     * const aiInterviewQuestion = await prisma.aiInterviewQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiInterviewQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, AiInterviewQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiInterviewQuestionClient<$Result.GetResult<Prisma.$AiInterviewQuestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AiInterviewQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInterviewQuestionFindFirstArgs} args - Arguments to find a AiInterviewQuestion
     * @example
     * // Get one AiInterviewQuestion
     * const aiInterviewQuestion = await prisma.aiInterviewQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiInterviewQuestionFindFirstArgs>(args?: SelectSubset<T, AiInterviewQuestionFindFirstArgs<ExtArgs>>): Prisma__AiInterviewQuestionClient<$Result.GetResult<Prisma.$AiInterviewQuestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AiInterviewQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInterviewQuestionFindFirstOrThrowArgs} args - Arguments to find a AiInterviewQuestion
     * @example
     * // Get one AiInterviewQuestion
     * const aiInterviewQuestion = await prisma.aiInterviewQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiInterviewQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, AiInterviewQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiInterviewQuestionClient<$Result.GetResult<Prisma.$AiInterviewQuestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AiInterviewQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInterviewQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiInterviewQuestions
     * const aiInterviewQuestions = await prisma.aiInterviewQuestion.findMany()
     * 
     * // Get first 10 AiInterviewQuestions
     * const aiInterviewQuestions = await prisma.aiInterviewQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiInterviewQuestionWithIdOnly = await prisma.aiInterviewQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiInterviewQuestionFindManyArgs>(args?: SelectSubset<T, AiInterviewQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiInterviewQuestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AiInterviewQuestion.
     * @param {AiInterviewQuestionCreateArgs} args - Arguments to create a AiInterviewQuestion.
     * @example
     * // Create one AiInterviewQuestion
     * const AiInterviewQuestion = await prisma.aiInterviewQuestion.create({
     *   data: {
     *     // ... data to create a AiInterviewQuestion
     *   }
     * })
     * 
     */
    create<T extends AiInterviewQuestionCreateArgs>(args: SelectSubset<T, AiInterviewQuestionCreateArgs<ExtArgs>>): Prisma__AiInterviewQuestionClient<$Result.GetResult<Prisma.$AiInterviewQuestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AiInterviewQuestions.
     * @param {AiInterviewQuestionCreateManyArgs} args - Arguments to create many AiInterviewQuestions.
     * @example
     * // Create many AiInterviewQuestions
     * const aiInterviewQuestion = await prisma.aiInterviewQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiInterviewQuestionCreateManyArgs>(args?: SelectSubset<T, AiInterviewQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiInterviewQuestions and returns the data saved in the database.
     * @param {AiInterviewQuestionCreateManyAndReturnArgs} args - Arguments to create many AiInterviewQuestions.
     * @example
     * // Create many AiInterviewQuestions
     * const aiInterviewQuestion = await prisma.aiInterviewQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiInterviewQuestions and only return the `id`
     * const aiInterviewQuestionWithIdOnly = await prisma.aiInterviewQuestion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiInterviewQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, AiInterviewQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiInterviewQuestionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AiInterviewQuestion.
     * @param {AiInterviewQuestionDeleteArgs} args - Arguments to delete one AiInterviewQuestion.
     * @example
     * // Delete one AiInterviewQuestion
     * const AiInterviewQuestion = await prisma.aiInterviewQuestion.delete({
     *   where: {
     *     // ... filter to delete one AiInterviewQuestion
     *   }
     * })
     * 
     */
    delete<T extends AiInterviewQuestionDeleteArgs>(args: SelectSubset<T, AiInterviewQuestionDeleteArgs<ExtArgs>>): Prisma__AiInterviewQuestionClient<$Result.GetResult<Prisma.$AiInterviewQuestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AiInterviewQuestion.
     * @param {AiInterviewQuestionUpdateArgs} args - Arguments to update one AiInterviewQuestion.
     * @example
     * // Update one AiInterviewQuestion
     * const aiInterviewQuestion = await prisma.aiInterviewQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiInterviewQuestionUpdateArgs>(args: SelectSubset<T, AiInterviewQuestionUpdateArgs<ExtArgs>>): Prisma__AiInterviewQuestionClient<$Result.GetResult<Prisma.$AiInterviewQuestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AiInterviewQuestions.
     * @param {AiInterviewQuestionDeleteManyArgs} args - Arguments to filter AiInterviewQuestions to delete.
     * @example
     * // Delete a few AiInterviewQuestions
     * const { count } = await prisma.aiInterviewQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiInterviewQuestionDeleteManyArgs>(args?: SelectSubset<T, AiInterviewQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiInterviewQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInterviewQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiInterviewQuestions
     * const aiInterviewQuestion = await prisma.aiInterviewQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiInterviewQuestionUpdateManyArgs>(args: SelectSubset<T, AiInterviewQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AiInterviewQuestion.
     * @param {AiInterviewQuestionUpsertArgs} args - Arguments to update or create a AiInterviewQuestion.
     * @example
     * // Update or create a AiInterviewQuestion
     * const aiInterviewQuestion = await prisma.aiInterviewQuestion.upsert({
     *   create: {
     *     // ... data to create a AiInterviewQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiInterviewQuestion we want to update
     *   }
     * })
     */
    upsert<T extends AiInterviewQuestionUpsertArgs>(args: SelectSubset<T, AiInterviewQuestionUpsertArgs<ExtArgs>>): Prisma__AiInterviewQuestionClient<$Result.GetResult<Prisma.$AiInterviewQuestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AiInterviewQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInterviewQuestionCountArgs} args - Arguments to filter AiInterviewQuestions to count.
     * @example
     * // Count the number of AiInterviewQuestions
     * const count = await prisma.aiInterviewQuestion.count({
     *   where: {
     *     // ... the filter for the AiInterviewQuestions we want to count
     *   }
     * })
    **/
    count<T extends AiInterviewQuestionCountArgs>(
      args?: Subset<T, AiInterviewQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiInterviewQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiInterviewQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInterviewQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AiInterviewQuestionAggregateArgs>(args: Subset<T, AiInterviewQuestionAggregateArgs>): Prisma.PrismaPromise<GetAiInterviewQuestionAggregateType<T>>

    /**
     * Group by AiInterviewQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInterviewQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AiInterviewQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiInterviewQuestionGroupByArgs['orderBy'] }
        : { orderBy?: AiInterviewQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AiInterviewQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiInterviewQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiInterviewQuestion model
   */
  readonly fields: AiInterviewQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiInterviewQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiInterviewQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aiInterview<T extends AiInterviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AiInterviewDefaultArgs<ExtArgs>>): Prisma__AiInterviewClient<$Result.GetResult<Prisma.$AiInterviewPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AiInterviewQuestion model
   */ 
  interface AiInterviewQuestionFieldRefs {
    readonly id: FieldRef<"AiInterviewQuestion", 'String'>
    readonly question: FieldRef<"AiInterviewQuestion", 'String'>
    readonly userAnswer: FieldRef<"AiInterviewQuestion", 'String'>
    readonly aiInterviewId: FieldRef<"AiInterviewQuestion", 'String'>
    readonly questionNumber: FieldRef<"AiInterviewQuestion", 'Int'>
    readonly createdAt: FieldRef<"AiInterviewQuestion", 'DateTime'>
    readonly updatedAt: FieldRef<"AiInterviewQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiInterviewQuestion findUnique
   */
  export type AiInterviewQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterviewQuestion
     */
    select?: AiInterviewQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AiInterviewQuestion to fetch.
     */
    where: AiInterviewQuestionWhereUniqueInput
  }

  /**
   * AiInterviewQuestion findUniqueOrThrow
   */
  export type AiInterviewQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterviewQuestion
     */
    select?: AiInterviewQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AiInterviewQuestion to fetch.
     */
    where: AiInterviewQuestionWhereUniqueInput
  }

  /**
   * AiInterviewQuestion findFirst
   */
  export type AiInterviewQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterviewQuestion
     */
    select?: AiInterviewQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AiInterviewQuestion to fetch.
     */
    where?: AiInterviewQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInterviewQuestions to fetch.
     */
    orderBy?: AiInterviewQuestionOrderByWithRelationInput | AiInterviewQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiInterviewQuestions.
     */
    cursor?: AiInterviewQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInterviewQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInterviewQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiInterviewQuestions.
     */
    distinct?: AiInterviewQuestionScalarFieldEnum | AiInterviewQuestionScalarFieldEnum[]
  }

  /**
   * AiInterviewQuestion findFirstOrThrow
   */
  export type AiInterviewQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterviewQuestion
     */
    select?: AiInterviewQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AiInterviewQuestion to fetch.
     */
    where?: AiInterviewQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInterviewQuestions to fetch.
     */
    orderBy?: AiInterviewQuestionOrderByWithRelationInput | AiInterviewQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiInterviewQuestions.
     */
    cursor?: AiInterviewQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInterviewQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInterviewQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiInterviewQuestions.
     */
    distinct?: AiInterviewQuestionScalarFieldEnum | AiInterviewQuestionScalarFieldEnum[]
  }

  /**
   * AiInterviewQuestion findMany
   */
  export type AiInterviewQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterviewQuestion
     */
    select?: AiInterviewQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AiInterviewQuestions to fetch.
     */
    where?: AiInterviewQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInterviewQuestions to fetch.
     */
    orderBy?: AiInterviewQuestionOrderByWithRelationInput | AiInterviewQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiInterviewQuestions.
     */
    cursor?: AiInterviewQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInterviewQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInterviewQuestions.
     */
    skip?: number
    distinct?: AiInterviewQuestionScalarFieldEnum | AiInterviewQuestionScalarFieldEnum[]
  }

  /**
   * AiInterviewQuestion create
   */
  export type AiInterviewQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterviewQuestion
     */
    select?: AiInterviewQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a AiInterviewQuestion.
     */
    data: XOR<AiInterviewQuestionCreateInput, AiInterviewQuestionUncheckedCreateInput>
  }

  /**
   * AiInterviewQuestion createMany
   */
  export type AiInterviewQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiInterviewQuestions.
     */
    data: AiInterviewQuestionCreateManyInput | AiInterviewQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiInterviewQuestion createManyAndReturn
   */
  export type AiInterviewQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterviewQuestion
     */
    select?: AiInterviewQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AiInterviewQuestions.
     */
    data: AiInterviewQuestionCreateManyInput | AiInterviewQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiInterviewQuestion update
   */
  export type AiInterviewQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterviewQuestion
     */
    select?: AiInterviewQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a AiInterviewQuestion.
     */
    data: XOR<AiInterviewQuestionUpdateInput, AiInterviewQuestionUncheckedUpdateInput>
    /**
     * Choose, which AiInterviewQuestion to update.
     */
    where: AiInterviewQuestionWhereUniqueInput
  }

  /**
   * AiInterviewQuestion updateMany
   */
  export type AiInterviewQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiInterviewQuestions.
     */
    data: XOR<AiInterviewQuestionUpdateManyMutationInput, AiInterviewQuestionUncheckedUpdateManyInput>
    /**
     * Filter which AiInterviewQuestions to update
     */
    where?: AiInterviewQuestionWhereInput
  }

  /**
   * AiInterviewQuestion upsert
   */
  export type AiInterviewQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterviewQuestion
     */
    select?: AiInterviewQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the AiInterviewQuestion to update in case it exists.
     */
    where: AiInterviewQuestionWhereUniqueInput
    /**
     * In case the AiInterviewQuestion found by the `where` argument doesn't exist, create a new AiInterviewQuestion with this data.
     */
    create: XOR<AiInterviewQuestionCreateInput, AiInterviewQuestionUncheckedCreateInput>
    /**
     * In case the AiInterviewQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiInterviewQuestionUpdateInput, AiInterviewQuestionUncheckedUpdateInput>
  }

  /**
   * AiInterviewQuestion delete
   */
  export type AiInterviewQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterviewQuestion
     */
    select?: AiInterviewQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewQuestionInclude<ExtArgs> | null
    /**
     * Filter which AiInterviewQuestion to delete.
     */
    where: AiInterviewQuestionWhereUniqueInput
  }

  /**
   * AiInterviewQuestion deleteMany
   */
  export type AiInterviewQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiInterviewQuestions to delete
     */
    where?: AiInterviewQuestionWhereInput
  }

  /**
   * AiInterviewQuestion without action
   */
  export type AiInterviewQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInterviewQuestion
     */
    select?: AiInterviewQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInterviewQuestionInclude<ExtArgs> | null
  }


  /**
   * Model Reminder
   */

  export type AggregateReminder = {
    _count: ReminderCountAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  export type ReminderMinAggregateOutputType = {
    id: string | null
    applicationId: string | null
    userId: string | null
    reminderDate: Date | null
    isSent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReminderMaxAggregateOutputType = {
    id: string | null
    applicationId: string | null
    userId: string | null
    reminderDate: Date | null
    isSent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReminderCountAggregateOutputType = {
    id: number
    applicationId: number
    userId: number
    reminderDate: number
    isSent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReminderMinAggregateInputType = {
    id?: true
    applicationId?: true
    userId?: true
    reminderDate?: true
    isSent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReminderMaxAggregateInputType = {
    id?: true
    applicationId?: true
    userId?: true
    reminderDate?: true
    isSent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReminderCountAggregateInputType = {
    id?: true
    applicationId?: true
    userId?: true
    reminderDate?: true
    isSent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReminderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminder to aggregate.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reminders
    **/
    _count?: true | ReminderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReminderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReminderMaxAggregateInputType
  }

  export type GetReminderAggregateType<T extends ReminderAggregateArgs> = {
        [P in keyof T & keyof AggregateReminder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminder[P]>
      : GetScalarType<T[P], AggregateReminder[P]>
  }




  export type ReminderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithAggregationInput | ReminderOrderByWithAggregationInput[]
    by: ReminderScalarFieldEnum[] | ReminderScalarFieldEnum
    having?: ReminderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReminderCountAggregateInputType | true
    _min?: ReminderMinAggregateInputType
    _max?: ReminderMaxAggregateInputType
  }

  export type ReminderGroupByOutputType = {
    id: string
    applicationId: string
    userId: string
    reminderDate: Date
    isSent: boolean
    createdAt: Date
    updatedAt: Date
    _count: ReminderCountAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  type GetReminderGroupByPayload<T extends ReminderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReminderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReminderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReminderGroupByOutputType[P]>
            : GetScalarType<T[P], ReminderGroupByOutputType[P]>
        }
      >
    >


  export type ReminderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    userId?: boolean
    reminderDate?: boolean
    isSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    userId?: boolean
    reminderDate?: boolean
    isSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectScalar = {
    id?: boolean
    applicationId?: boolean
    userId?: boolean
    reminderDate?: boolean
    isSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReminderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReminderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReminderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reminder"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationId: string
      userId: string
      reminderDate: Date
      isSent: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reminder"]>
    composites: {}
  }

  type ReminderGetPayload<S extends boolean | null | undefined | ReminderDefaultArgs> = $Result.GetResult<Prisma.$ReminderPayload, S>

  type ReminderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReminderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReminderCountAggregateInputType | true
    }

  export interface ReminderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reminder'], meta: { name: 'Reminder' } }
    /**
     * Find zero or one Reminder that matches the filter.
     * @param {ReminderFindUniqueArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReminderFindUniqueArgs>(args: SelectSubset<T, ReminderFindUniqueArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reminder that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReminderFindUniqueOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReminderFindUniqueOrThrowArgs>(args: SelectSubset<T, ReminderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reminder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReminderFindFirstArgs>(args?: SelectSubset<T, ReminderFindFirstArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reminder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReminderFindFirstOrThrowArgs>(args?: SelectSubset<T, ReminderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reminders
     * const reminders = await prisma.reminder.findMany()
     * 
     * // Get first 10 Reminders
     * const reminders = await prisma.reminder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reminderWithIdOnly = await prisma.reminder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReminderFindManyArgs>(args?: SelectSubset<T, ReminderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reminder.
     * @param {ReminderCreateArgs} args - Arguments to create a Reminder.
     * @example
     * // Create one Reminder
     * const Reminder = await prisma.reminder.create({
     *   data: {
     *     // ... data to create a Reminder
     *   }
     * })
     * 
     */
    create<T extends ReminderCreateArgs>(args: SelectSubset<T, ReminderCreateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reminders.
     * @param {ReminderCreateManyArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReminderCreateManyArgs>(args?: SelectSubset<T, ReminderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reminders and returns the data saved in the database.
     * @param {ReminderCreateManyAndReturnArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reminders and only return the `id`
     * const reminderWithIdOnly = await prisma.reminder.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReminderCreateManyAndReturnArgs>(args?: SelectSubset<T, ReminderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reminder.
     * @param {ReminderDeleteArgs} args - Arguments to delete one Reminder.
     * @example
     * // Delete one Reminder
     * const Reminder = await prisma.reminder.delete({
     *   where: {
     *     // ... filter to delete one Reminder
     *   }
     * })
     * 
     */
    delete<T extends ReminderDeleteArgs>(args: SelectSubset<T, ReminderDeleteArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reminder.
     * @param {ReminderUpdateArgs} args - Arguments to update one Reminder.
     * @example
     * // Update one Reminder
     * const reminder = await prisma.reminder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReminderUpdateArgs>(args: SelectSubset<T, ReminderUpdateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reminders.
     * @param {ReminderDeleteManyArgs} args - Arguments to filter Reminders to delete.
     * @example
     * // Delete a few Reminders
     * const { count } = await prisma.reminder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReminderDeleteManyArgs>(args?: SelectSubset<T, ReminderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReminderUpdateManyArgs>(args: SelectSubset<T, ReminderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reminder.
     * @param {ReminderUpsertArgs} args - Arguments to update or create a Reminder.
     * @example
     * // Update or create a Reminder
     * const reminder = await prisma.reminder.upsert({
     *   create: {
     *     // ... data to create a Reminder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reminder we want to update
     *   }
     * })
     */
    upsert<T extends ReminderUpsertArgs>(args: SelectSubset<T, ReminderUpsertArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderCountArgs} args - Arguments to filter Reminders to count.
     * @example
     * // Count the number of Reminders
     * const count = await prisma.reminder.count({
     *   where: {
     *     // ... the filter for the Reminders we want to count
     *   }
     * })
    **/
    count<T extends ReminderCountArgs>(
      args?: Subset<T, ReminderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReminderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReminderAggregateArgs>(args: Subset<T, ReminderAggregateArgs>): Prisma.PrismaPromise<GetReminderAggregateType<T>>

    /**
     * Group by Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReminderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReminderGroupByArgs['orderBy'] }
        : { orderBy?: ReminderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReminderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReminderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reminder model
   */
  readonly fields: ReminderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reminder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReminderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reminder model
   */ 
  interface ReminderFieldRefs {
    readonly id: FieldRef<"Reminder", 'String'>
    readonly applicationId: FieldRef<"Reminder", 'String'>
    readonly userId: FieldRef<"Reminder", 'String'>
    readonly reminderDate: FieldRef<"Reminder", 'DateTime'>
    readonly isSent: FieldRef<"Reminder", 'Boolean'>
    readonly createdAt: FieldRef<"Reminder", 'DateTime'>
    readonly updatedAt: FieldRef<"Reminder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reminder findUnique
   */
  export type ReminderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findUniqueOrThrow
   */
  export type ReminderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findFirst
   */
  export type ReminderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findFirstOrThrow
   */
  export type ReminderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findMany
   */
  export type ReminderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminders to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder create
   */
  export type ReminderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to create a Reminder.
     */
    data: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
  }

  /**
   * Reminder createMany
   */
  export type ReminderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reminder createManyAndReturn
   */
  export type ReminderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reminder update
   */
  export type ReminderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to update a Reminder.
     */
    data: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
    /**
     * Choose, which Reminder to update.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder updateMany
   */
  export type ReminderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reminders.
     */
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: ReminderWhereInput
  }

  /**
   * Reminder upsert
   */
  export type ReminderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The filter to search for the Reminder to update in case it exists.
     */
    where: ReminderWhereUniqueInput
    /**
     * In case the Reminder found by the `where` argument doesn't exist, create a new Reminder with this data.
     */
    create: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
    /**
     * In case the Reminder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
  }

  /**
   * Reminder delete
   */
  export type ReminderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter which Reminder to delete.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder deleteMany
   */
  export type ReminderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminders to delete
     */
    where?: ReminderWhereInput
  }

  /**
   * Reminder without action
   */
  export type ReminderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    name: 'name',
    email: 'email',
    profilePicture: 'profilePicture',
    targetRole: 'targetRole',
    experienceLevel: 'experienceLevel',
    resumeUrl: 'resumeUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    jobTitle: 'jobTitle',
    jobDescription: 'jobDescription',
    status: 'status',
    source: 'source',
    dateApplied: 'dateApplied',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const StatusHistoryScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type StatusHistoryScalarFieldEnum = (typeof StatusHistoryScalarFieldEnum)[keyof typeof StatusHistoryScalarFieldEnum]


  export const AiInterviewScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    overallScore: 'overallScore',
    overallFeedback: 'overallFeedback',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AiInterviewScalarFieldEnum = (typeof AiInterviewScalarFieldEnum)[keyof typeof AiInterviewScalarFieldEnum]


  export const AiInterviewQuestionScalarFieldEnum: {
    id: 'id',
    question: 'question',
    userAnswer: 'userAnswer',
    aiInterviewId: 'aiInterviewId',
    questionNumber: 'questionNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AiInterviewQuestionScalarFieldEnum = (typeof AiInterviewQuestionScalarFieldEnum)[keyof typeof AiInterviewQuestionScalarFieldEnum]


  export const ReminderScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    userId: 'userId',
    reminderDate: 'reminderDate',
    isSent: 'isSent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReminderScalarFieldEnum = (typeof ReminderScalarFieldEnum)[keyof typeof ReminderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'ApplicationSource'
   */
  export type EnumApplicationSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationSource'>
    


  /**
   * Reference to a field of type 'ApplicationSource[]'
   */
  export type ListEnumApplicationSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationSource[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    targetRole?: StringNullableFilter<"User"> | string | null
    experienceLevel?: StringNullableFilter<"User"> | string | null
    resumeUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    applications?: ApplicationListRelationFilter
    reminders?: ReminderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    targetRole?: SortOrderInput | SortOrder
    experienceLevel?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applications?: ApplicationOrderByRelationAggregateInput
    reminders?: ReminderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    targetRole?: StringNullableFilter<"User"> | string | null
    experienceLevel?: StringNullableFilter<"User"> | string | null
    resumeUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    applications?: ApplicationListRelationFilter
    reminders?: ReminderListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    targetRole?: SortOrderInput | SortOrder
    experienceLevel?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    targetRole?: StringNullableWithAggregatesFilter<"User"> | string | null
    experienceLevel?: StringNullableWithAggregatesFilter<"User"> | string | null
    resumeUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: StringFilter<"Application"> | string
    companyName?: StringFilter<"Application"> | string
    jobTitle?: StringFilter<"Application"> | string
    jobDescription?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    source?: EnumApplicationSourceFilter<"Application"> | $Enums.ApplicationSource
    dateApplied?: DateTimeFilter<"Application"> | Date | string
    notes?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    userId?: StringFilter<"Application"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    aiInterviews?: AiInterviewListRelationFilter
    reminders?: ReminderListRelationFilter
    statusHistory?: StatusHistoryListRelationFilter
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    jobDescription?: SortOrder
    status?: SortOrder
    source?: SortOrder
    dateApplied?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    aiInterviews?: AiInterviewOrderByRelationAggregateInput
    reminders?: ReminderOrderByRelationAggregateInput
    statusHistory?: StatusHistoryOrderByRelationAggregateInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    companyName?: StringFilter<"Application"> | string
    jobTitle?: StringFilter<"Application"> | string
    jobDescription?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    source?: EnumApplicationSourceFilter<"Application"> | $Enums.ApplicationSource
    dateApplied?: DateTimeFilter<"Application"> | Date | string
    notes?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    userId?: StringFilter<"Application"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    aiInterviews?: AiInterviewListRelationFilter
    reminders?: ReminderListRelationFilter
    statusHistory?: StatusHistoryListRelationFilter
  }, "id">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    jobDescription?: SortOrder
    status?: SortOrder
    source?: SortOrder
    dateApplied?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Application"> | string
    companyName?: StringWithAggregatesFilter<"Application"> | string
    jobTitle?: StringWithAggregatesFilter<"Application"> | string
    jobDescription?: StringWithAggregatesFilter<"Application"> | string
    status?: EnumApplicationStatusWithAggregatesFilter<"Application"> | $Enums.ApplicationStatus
    source?: EnumApplicationSourceWithAggregatesFilter<"Application"> | $Enums.ApplicationSource
    dateApplied?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Application"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    userId?: StringWithAggregatesFilter<"Application"> | string
  }

  export type StatusHistoryWhereInput = {
    AND?: StatusHistoryWhereInput | StatusHistoryWhereInput[]
    OR?: StatusHistoryWhereInput[]
    NOT?: StatusHistoryWhereInput | StatusHistoryWhereInput[]
    id?: StringFilter<"StatusHistory"> | string
    applicationId?: StringFilter<"StatusHistory"> | string
    status?: EnumApplicationStatusFilter<"StatusHistory"> | $Enums.ApplicationStatus
    createdAt?: DateTimeFilter<"StatusHistory"> | Date | string
    application?: XOR<ApplicationRelationFilter, ApplicationWhereInput>
  }

  export type StatusHistoryOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    application?: ApplicationOrderByWithRelationInput
  }

  export type StatusHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StatusHistoryWhereInput | StatusHistoryWhereInput[]
    OR?: StatusHistoryWhereInput[]
    NOT?: StatusHistoryWhereInput | StatusHistoryWhereInput[]
    applicationId?: StringFilter<"StatusHistory"> | string
    status?: EnumApplicationStatusFilter<"StatusHistory"> | $Enums.ApplicationStatus
    createdAt?: DateTimeFilter<"StatusHistory"> | Date | string
    application?: XOR<ApplicationRelationFilter, ApplicationWhereInput>
  }, "id">

  export type StatusHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: StatusHistoryCountOrderByAggregateInput
    _max?: StatusHistoryMaxOrderByAggregateInput
    _min?: StatusHistoryMinOrderByAggregateInput
  }

  export type StatusHistoryScalarWhereWithAggregatesInput = {
    AND?: StatusHistoryScalarWhereWithAggregatesInput | StatusHistoryScalarWhereWithAggregatesInput[]
    OR?: StatusHistoryScalarWhereWithAggregatesInput[]
    NOT?: StatusHistoryScalarWhereWithAggregatesInput | StatusHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StatusHistory"> | string
    applicationId?: StringWithAggregatesFilter<"StatusHistory"> | string
    status?: EnumApplicationStatusWithAggregatesFilter<"StatusHistory"> | $Enums.ApplicationStatus
    createdAt?: DateTimeWithAggregatesFilter<"StatusHistory"> | Date | string
  }

  export type AiInterviewWhereInput = {
    AND?: AiInterviewWhereInput | AiInterviewWhereInput[]
    OR?: AiInterviewWhereInput[]
    NOT?: AiInterviewWhereInput | AiInterviewWhereInput[]
    id?: StringFilter<"AiInterview"> | string
    applicationId?: StringFilter<"AiInterview"> | string
    overallScore?: IntNullableFilter<"AiInterview"> | number | null
    overallFeedback?: StringNullableFilter<"AiInterview"> | string | null
    createdAt?: DateTimeFilter<"AiInterview"> | Date | string
    updatedAt?: DateTimeFilter<"AiInterview"> | Date | string
    application?: XOR<ApplicationRelationFilter, ApplicationWhereInput>
    questions?: AiInterviewQuestionListRelationFilter
  }

  export type AiInterviewOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    overallScore?: SortOrderInput | SortOrder
    overallFeedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    application?: ApplicationOrderByWithRelationInput
    questions?: AiInterviewQuestionOrderByRelationAggregateInput
  }

  export type AiInterviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AiInterviewWhereInput | AiInterviewWhereInput[]
    OR?: AiInterviewWhereInput[]
    NOT?: AiInterviewWhereInput | AiInterviewWhereInput[]
    applicationId?: StringFilter<"AiInterview"> | string
    overallScore?: IntNullableFilter<"AiInterview"> | number | null
    overallFeedback?: StringNullableFilter<"AiInterview"> | string | null
    createdAt?: DateTimeFilter<"AiInterview"> | Date | string
    updatedAt?: DateTimeFilter<"AiInterview"> | Date | string
    application?: XOR<ApplicationRelationFilter, ApplicationWhereInput>
    questions?: AiInterviewQuestionListRelationFilter
  }, "id">

  export type AiInterviewOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    overallScore?: SortOrderInput | SortOrder
    overallFeedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AiInterviewCountOrderByAggregateInput
    _avg?: AiInterviewAvgOrderByAggregateInput
    _max?: AiInterviewMaxOrderByAggregateInput
    _min?: AiInterviewMinOrderByAggregateInput
    _sum?: AiInterviewSumOrderByAggregateInput
  }

  export type AiInterviewScalarWhereWithAggregatesInput = {
    AND?: AiInterviewScalarWhereWithAggregatesInput | AiInterviewScalarWhereWithAggregatesInput[]
    OR?: AiInterviewScalarWhereWithAggregatesInput[]
    NOT?: AiInterviewScalarWhereWithAggregatesInput | AiInterviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiInterview"> | string
    applicationId?: StringWithAggregatesFilter<"AiInterview"> | string
    overallScore?: IntNullableWithAggregatesFilter<"AiInterview"> | number | null
    overallFeedback?: StringNullableWithAggregatesFilter<"AiInterview"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AiInterview"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AiInterview"> | Date | string
  }

  export type AiInterviewQuestionWhereInput = {
    AND?: AiInterviewQuestionWhereInput | AiInterviewQuestionWhereInput[]
    OR?: AiInterviewQuestionWhereInput[]
    NOT?: AiInterviewQuestionWhereInput | AiInterviewQuestionWhereInput[]
    id?: StringFilter<"AiInterviewQuestion"> | string
    question?: StringFilter<"AiInterviewQuestion"> | string
    userAnswer?: StringNullableFilter<"AiInterviewQuestion"> | string | null
    aiInterviewId?: StringFilter<"AiInterviewQuestion"> | string
    questionNumber?: IntFilter<"AiInterviewQuestion"> | number
    createdAt?: DateTimeFilter<"AiInterviewQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"AiInterviewQuestion"> | Date | string
    aiInterview?: XOR<AiInterviewRelationFilter, AiInterviewWhereInput>
  }

  export type AiInterviewQuestionOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    userAnswer?: SortOrderInput | SortOrder
    aiInterviewId?: SortOrder
    questionNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiInterview?: AiInterviewOrderByWithRelationInput
  }

  export type AiInterviewQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AiInterviewQuestionWhereInput | AiInterviewQuestionWhereInput[]
    OR?: AiInterviewQuestionWhereInput[]
    NOT?: AiInterviewQuestionWhereInput | AiInterviewQuestionWhereInput[]
    question?: StringFilter<"AiInterviewQuestion"> | string
    userAnswer?: StringNullableFilter<"AiInterviewQuestion"> | string | null
    aiInterviewId?: StringFilter<"AiInterviewQuestion"> | string
    questionNumber?: IntFilter<"AiInterviewQuestion"> | number
    createdAt?: DateTimeFilter<"AiInterviewQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"AiInterviewQuestion"> | Date | string
    aiInterview?: XOR<AiInterviewRelationFilter, AiInterviewWhereInput>
  }, "id">

  export type AiInterviewQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    userAnswer?: SortOrderInput | SortOrder
    aiInterviewId?: SortOrder
    questionNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AiInterviewQuestionCountOrderByAggregateInput
    _avg?: AiInterviewQuestionAvgOrderByAggregateInput
    _max?: AiInterviewQuestionMaxOrderByAggregateInput
    _min?: AiInterviewQuestionMinOrderByAggregateInput
    _sum?: AiInterviewQuestionSumOrderByAggregateInput
  }

  export type AiInterviewQuestionScalarWhereWithAggregatesInput = {
    AND?: AiInterviewQuestionScalarWhereWithAggregatesInput | AiInterviewQuestionScalarWhereWithAggregatesInput[]
    OR?: AiInterviewQuestionScalarWhereWithAggregatesInput[]
    NOT?: AiInterviewQuestionScalarWhereWithAggregatesInput | AiInterviewQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiInterviewQuestion"> | string
    question?: StringWithAggregatesFilter<"AiInterviewQuestion"> | string
    userAnswer?: StringNullableWithAggregatesFilter<"AiInterviewQuestion"> | string | null
    aiInterviewId?: StringWithAggregatesFilter<"AiInterviewQuestion"> | string
    questionNumber?: IntWithAggregatesFilter<"AiInterviewQuestion"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AiInterviewQuestion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AiInterviewQuestion"> | Date | string
  }

  export type ReminderWhereInput = {
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    id?: StringFilter<"Reminder"> | string
    applicationId?: StringFilter<"Reminder"> | string
    userId?: StringFilter<"Reminder"> | string
    reminderDate?: DateTimeFilter<"Reminder"> | Date | string
    isSent?: BoolFilter<"Reminder"> | boolean
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
    updatedAt?: DateTimeFilter<"Reminder"> | Date | string
    application?: XOR<ApplicationRelationFilter, ApplicationWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ReminderOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    userId?: SortOrder
    reminderDate?: SortOrder
    isSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    application?: ApplicationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReminderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    applicationId?: StringFilter<"Reminder"> | string
    userId?: StringFilter<"Reminder"> | string
    reminderDate?: DateTimeFilter<"Reminder"> | Date | string
    isSent?: BoolFilter<"Reminder"> | boolean
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
    updatedAt?: DateTimeFilter<"Reminder"> | Date | string
    application?: XOR<ApplicationRelationFilter, ApplicationWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ReminderOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    userId?: SortOrder
    reminderDate?: SortOrder
    isSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReminderCountOrderByAggregateInput
    _max?: ReminderMaxOrderByAggregateInput
    _min?: ReminderMinOrderByAggregateInput
  }

  export type ReminderScalarWhereWithAggregatesInput = {
    AND?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    OR?: ReminderScalarWhereWithAggregatesInput[]
    NOT?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reminder"> | string
    applicationId?: StringWithAggregatesFilter<"Reminder"> | string
    userId?: StringWithAggregatesFilter<"Reminder"> | string
    reminderDate?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
    isSent?: BoolWithAggregatesFilter<"Reminder"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    profilePicture?: string | null
    targetRole?: string | null
    experienceLevel?: string | null
    resumeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    profilePicture?: string | null
    targetRole?: string | null
    experienceLevel?: string | null
    resumeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    profilePicture?: string | null
    targetRole?: string | null
    experienceLevel?: string | null
    resumeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateInput = {
    id?: string
    companyName: string
    jobTitle: string
    jobDescription: string
    status?: $Enums.ApplicationStatus
    source: $Enums.ApplicationSource
    dateApplied?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicationsInput
    aiInterviews?: AiInterviewCreateNestedManyWithoutApplicationInput
    reminders?: ReminderCreateNestedManyWithoutApplicationInput
    statusHistory?: StatusHistoryCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    companyName: string
    jobTitle: string
    jobDescription: string
    status?: $Enums.ApplicationStatus
    source: $Enums.ApplicationSource
    dateApplied?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    aiInterviews?: AiInterviewUncheckedCreateNestedManyWithoutApplicationInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutApplicationInput
    statusHistory?: StatusHistoryUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    source?: EnumApplicationSourceFieldUpdateOperationsInput | $Enums.ApplicationSource
    dateApplied?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    aiInterviews?: AiInterviewUpdateManyWithoutApplicationNestedInput
    reminders?: ReminderUpdateManyWithoutApplicationNestedInput
    statusHistory?: StatusHistoryUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    source?: EnumApplicationSourceFieldUpdateOperationsInput | $Enums.ApplicationSource
    dateApplied?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    aiInterviews?: AiInterviewUncheckedUpdateManyWithoutApplicationNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutApplicationNestedInput
    statusHistory?: StatusHistoryUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateManyInput = {
    id?: string
    companyName: string
    jobTitle: string
    jobDescription: string
    status?: $Enums.ApplicationStatus
    source: $Enums.ApplicationSource
    dateApplied?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    source?: EnumApplicationSourceFieldUpdateOperationsInput | $Enums.ApplicationSource
    dateApplied?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    source?: EnumApplicationSourceFieldUpdateOperationsInput | $Enums.ApplicationSource
    dateApplied?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StatusHistoryCreateInput = {
    id?: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    application: ApplicationCreateNestedOneWithoutStatusHistoryInput
  }

  export type StatusHistoryUncheckedCreateInput = {
    id?: string
    applicationId: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
  }

  export type StatusHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutStatusHistoryNestedInput
  }

  export type StatusHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusHistoryCreateManyInput = {
    id?: string
    applicationId: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
  }

  export type StatusHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiInterviewCreateInput = {
    id?: string
    overallScore?: number | null
    overallFeedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    application: ApplicationCreateNestedOneWithoutAiInterviewsInput
    questions?: AiInterviewQuestionCreateNestedManyWithoutAiInterviewInput
  }

  export type AiInterviewUncheckedCreateInput = {
    id?: string
    applicationId: string
    overallScore?: number | null
    overallFeedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: AiInterviewQuestionUncheckedCreateNestedManyWithoutAiInterviewInput
  }

  export type AiInterviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableIntFieldUpdateOperationsInput | number | null
    overallFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutAiInterviewsNestedInput
    questions?: AiInterviewQuestionUpdateManyWithoutAiInterviewNestedInput
  }

  export type AiInterviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableIntFieldUpdateOperationsInput | number | null
    overallFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: AiInterviewQuestionUncheckedUpdateManyWithoutAiInterviewNestedInput
  }

  export type AiInterviewCreateManyInput = {
    id?: string
    applicationId: string
    overallScore?: number | null
    overallFeedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiInterviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableIntFieldUpdateOperationsInput | number | null
    overallFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiInterviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableIntFieldUpdateOperationsInput | number | null
    overallFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiInterviewQuestionCreateInput = {
    id?: string
    question: string
    userAnswer?: string | null
    questionNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    aiInterview: AiInterviewCreateNestedOneWithoutQuestionsInput
  }

  export type AiInterviewQuestionUncheckedCreateInput = {
    id?: string
    question: string
    userAnswer?: string | null
    aiInterviewId: string
    questionNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiInterviewQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    questionNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiInterview?: AiInterviewUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type AiInterviewQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    aiInterviewId?: StringFieldUpdateOperationsInput | string
    questionNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiInterviewQuestionCreateManyInput = {
    id?: string
    question: string
    userAnswer?: string | null
    aiInterviewId: string
    questionNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiInterviewQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    questionNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiInterviewQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    aiInterviewId?: StringFieldUpdateOperationsInput | string
    questionNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderCreateInput = {
    id?: string
    reminderDate: Date | string
    isSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    application: ApplicationCreateNestedOneWithoutRemindersInput
    user: UserCreateNestedOneWithoutRemindersInput
  }

  export type ReminderUncheckedCreateInput = {
    id?: string
    applicationId: string
    userId: string
    reminderDate: Date | string
    isSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReminderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutRemindersNestedInput
    user?: UserUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type ReminderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reminderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderCreateManyInput = {
    id?: string
    applicationId: string
    userId: string
    reminderDate: Date | string
    isSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReminderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reminderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type ReminderListRelationFilter = {
    every?: ReminderWhereInput
    some?: ReminderWhereInput
    none?: ReminderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReminderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePicture?: SortOrder
    targetRole?: SortOrder
    experienceLevel?: SortOrder
    resumeUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePicture?: SortOrder
    targetRole?: SortOrder
    experienceLevel?: SortOrder
    resumeUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePicture?: SortOrder
    targetRole?: SortOrder
    experienceLevel?: SortOrder
    resumeUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type EnumApplicationSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationSource | EnumApplicationSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationSource[] | ListEnumApplicationSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationSource[] | ListEnumApplicationSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationSourceFilter<$PrismaModel> | $Enums.ApplicationSource
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AiInterviewListRelationFilter = {
    every?: AiInterviewWhereInput
    some?: AiInterviewWhereInput
    none?: AiInterviewWhereInput
  }

  export type StatusHistoryListRelationFilter = {
    every?: StatusHistoryWhereInput
    some?: StatusHistoryWhereInput
    none?: StatusHistoryWhereInput
  }

  export type AiInterviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatusHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    jobDescription?: SortOrder
    status?: SortOrder
    source?: SortOrder
    dateApplied?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    jobDescription?: SortOrder
    status?: SortOrder
    source?: SortOrder
    dateApplied?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    jobDescription?: SortOrder
    status?: SortOrder
    source?: SortOrder
    dateApplied?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type EnumApplicationSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationSource | EnumApplicationSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationSource[] | ListEnumApplicationSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationSource[] | ListEnumApplicationSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationSourceWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationSourceFilter<$PrismaModel>
    _max?: NestedEnumApplicationSourceFilter<$PrismaModel>
  }

  export type ApplicationRelationFilter = {
    is?: ApplicationWhereInput
    isNot?: ApplicationWhereInput
  }

  export type StatusHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StatusHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StatusHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AiInterviewQuestionListRelationFilter = {
    every?: AiInterviewQuestionWhereInput
    some?: AiInterviewQuestionWhereInput
    none?: AiInterviewQuestionWhereInput
  }

  export type AiInterviewQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiInterviewCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    overallScore?: SortOrder
    overallFeedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiInterviewAvgOrderByAggregateInput = {
    overallScore?: SortOrder
  }

  export type AiInterviewMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    overallScore?: SortOrder
    overallFeedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiInterviewMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    overallScore?: SortOrder
    overallFeedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiInterviewSumOrderByAggregateInput = {
    overallScore?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AiInterviewRelationFilter = {
    is?: AiInterviewWhereInput
    isNot?: AiInterviewWhereInput
  }

  export type AiInterviewQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    userAnswer?: SortOrder
    aiInterviewId?: SortOrder
    questionNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiInterviewQuestionAvgOrderByAggregateInput = {
    questionNumber?: SortOrder
  }

  export type AiInterviewQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    userAnswer?: SortOrder
    aiInterviewId?: SortOrder
    questionNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiInterviewQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    userAnswer?: SortOrder
    aiInterviewId?: SortOrder
    questionNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiInterviewQuestionSumOrderByAggregateInput = {
    questionNumber?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ReminderCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    userId?: SortOrder
    reminderDate?: SortOrder
    isSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReminderMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    userId?: SortOrder
    reminderDate?: SortOrder
    isSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReminderMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    userId?: SortOrder
    reminderDate?: SortOrder
    isSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ApplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ReminderCreateNestedManyWithoutUserInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ReminderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ApplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutUserInput | ApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutUserInput | ApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutUserInput | ApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ReminderUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutUserInput | ReminderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutUserInput | ReminderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutUserInput | ReminderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutUserInput | ApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutUserInput | ApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutUserInput | ApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ReminderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutUserInput | ReminderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutUserInput | ReminderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutUserInput | ReminderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type AiInterviewCreateNestedManyWithoutApplicationInput = {
    create?: XOR<AiInterviewCreateWithoutApplicationInput, AiInterviewUncheckedCreateWithoutApplicationInput> | AiInterviewCreateWithoutApplicationInput[] | AiInterviewUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: AiInterviewCreateOrConnectWithoutApplicationInput | AiInterviewCreateOrConnectWithoutApplicationInput[]
    createMany?: AiInterviewCreateManyApplicationInputEnvelope
    connect?: AiInterviewWhereUniqueInput | AiInterviewWhereUniqueInput[]
  }

  export type ReminderCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ReminderCreateWithoutApplicationInput, ReminderUncheckedCreateWithoutApplicationInput> | ReminderCreateWithoutApplicationInput[] | ReminderUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutApplicationInput | ReminderCreateOrConnectWithoutApplicationInput[]
    createMany?: ReminderCreateManyApplicationInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type StatusHistoryCreateNestedManyWithoutApplicationInput = {
    create?: XOR<StatusHistoryCreateWithoutApplicationInput, StatusHistoryUncheckedCreateWithoutApplicationInput> | StatusHistoryCreateWithoutApplicationInput[] | StatusHistoryUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: StatusHistoryCreateOrConnectWithoutApplicationInput | StatusHistoryCreateOrConnectWithoutApplicationInput[]
    createMany?: StatusHistoryCreateManyApplicationInputEnvelope
    connect?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
  }

  export type AiInterviewUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<AiInterviewCreateWithoutApplicationInput, AiInterviewUncheckedCreateWithoutApplicationInput> | AiInterviewCreateWithoutApplicationInput[] | AiInterviewUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: AiInterviewCreateOrConnectWithoutApplicationInput | AiInterviewCreateOrConnectWithoutApplicationInput[]
    createMany?: AiInterviewCreateManyApplicationInputEnvelope
    connect?: AiInterviewWhereUniqueInput | AiInterviewWhereUniqueInput[]
  }

  export type ReminderUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ReminderCreateWithoutApplicationInput, ReminderUncheckedCreateWithoutApplicationInput> | ReminderCreateWithoutApplicationInput[] | ReminderUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutApplicationInput | ReminderCreateOrConnectWithoutApplicationInput[]
    createMany?: ReminderCreateManyApplicationInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type StatusHistoryUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<StatusHistoryCreateWithoutApplicationInput, StatusHistoryUncheckedCreateWithoutApplicationInput> | StatusHistoryCreateWithoutApplicationInput[] | StatusHistoryUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: StatusHistoryCreateOrConnectWithoutApplicationInput | StatusHistoryCreateOrConnectWithoutApplicationInput[]
    createMany?: StatusHistoryCreateManyApplicationInputEnvelope
    connect?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type EnumApplicationSourceFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationSource
  }

  export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    upsert?: UserUpsertWithoutApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationsInput, UserUpdateWithoutApplicationsInput>, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type AiInterviewUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<AiInterviewCreateWithoutApplicationInput, AiInterviewUncheckedCreateWithoutApplicationInput> | AiInterviewCreateWithoutApplicationInput[] | AiInterviewUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: AiInterviewCreateOrConnectWithoutApplicationInput | AiInterviewCreateOrConnectWithoutApplicationInput[]
    upsert?: AiInterviewUpsertWithWhereUniqueWithoutApplicationInput | AiInterviewUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: AiInterviewCreateManyApplicationInputEnvelope
    set?: AiInterviewWhereUniqueInput | AiInterviewWhereUniqueInput[]
    disconnect?: AiInterviewWhereUniqueInput | AiInterviewWhereUniqueInput[]
    delete?: AiInterviewWhereUniqueInput | AiInterviewWhereUniqueInput[]
    connect?: AiInterviewWhereUniqueInput | AiInterviewWhereUniqueInput[]
    update?: AiInterviewUpdateWithWhereUniqueWithoutApplicationInput | AiInterviewUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: AiInterviewUpdateManyWithWhereWithoutApplicationInput | AiInterviewUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: AiInterviewScalarWhereInput | AiInterviewScalarWhereInput[]
  }

  export type ReminderUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ReminderCreateWithoutApplicationInput, ReminderUncheckedCreateWithoutApplicationInput> | ReminderCreateWithoutApplicationInput[] | ReminderUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutApplicationInput | ReminderCreateOrConnectWithoutApplicationInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutApplicationInput | ReminderUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ReminderCreateManyApplicationInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutApplicationInput | ReminderUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutApplicationInput | ReminderUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type StatusHistoryUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<StatusHistoryCreateWithoutApplicationInput, StatusHistoryUncheckedCreateWithoutApplicationInput> | StatusHistoryCreateWithoutApplicationInput[] | StatusHistoryUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: StatusHistoryCreateOrConnectWithoutApplicationInput | StatusHistoryCreateOrConnectWithoutApplicationInput[]
    upsert?: StatusHistoryUpsertWithWhereUniqueWithoutApplicationInput | StatusHistoryUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: StatusHistoryCreateManyApplicationInputEnvelope
    set?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
    disconnect?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
    delete?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
    connect?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
    update?: StatusHistoryUpdateWithWhereUniqueWithoutApplicationInput | StatusHistoryUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: StatusHistoryUpdateManyWithWhereWithoutApplicationInput | StatusHistoryUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: StatusHistoryScalarWhereInput | StatusHistoryScalarWhereInput[]
  }

  export type AiInterviewUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<AiInterviewCreateWithoutApplicationInput, AiInterviewUncheckedCreateWithoutApplicationInput> | AiInterviewCreateWithoutApplicationInput[] | AiInterviewUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: AiInterviewCreateOrConnectWithoutApplicationInput | AiInterviewCreateOrConnectWithoutApplicationInput[]
    upsert?: AiInterviewUpsertWithWhereUniqueWithoutApplicationInput | AiInterviewUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: AiInterviewCreateManyApplicationInputEnvelope
    set?: AiInterviewWhereUniqueInput | AiInterviewWhereUniqueInput[]
    disconnect?: AiInterviewWhereUniqueInput | AiInterviewWhereUniqueInput[]
    delete?: AiInterviewWhereUniqueInput | AiInterviewWhereUniqueInput[]
    connect?: AiInterviewWhereUniqueInput | AiInterviewWhereUniqueInput[]
    update?: AiInterviewUpdateWithWhereUniqueWithoutApplicationInput | AiInterviewUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: AiInterviewUpdateManyWithWhereWithoutApplicationInput | AiInterviewUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: AiInterviewScalarWhereInput | AiInterviewScalarWhereInput[]
  }

  export type ReminderUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ReminderCreateWithoutApplicationInput, ReminderUncheckedCreateWithoutApplicationInput> | ReminderCreateWithoutApplicationInput[] | ReminderUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutApplicationInput | ReminderCreateOrConnectWithoutApplicationInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutApplicationInput | ReminderUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ReminderCreateManyApplicationInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutApplicationInput | ReminderUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutApplicationInput | ReminderUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type StatusHistoryUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<StatusHistoryCreateWithoutApplicationInput, StatusHistoryUncheckedCreateWithoutApplicationInput> | StatusHistoryCreateWithoutApplicationInput[] | StatusHistoryUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: StatusHistoryCreateOrConnectWithoutApplicationInput | StatusHistoryCreateOrConnectWithoutApplicationInput[]
    upsert?: StatusHistoryUpsertWithWhereUniqueWithoutApplicationInput | StatusHistoryUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: StatusHistoryCreateManyApplicationInputEnvelope
    set?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
    disconnect?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
    delete?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
    connect?: StatusHistoryWhereUniqueInput | StatusHistoryWhereUniqueInput[]
    update?: StatusHistoryUpdateWithWhereUniqueWithoutApplicationInput | StatusHistoryUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: StatusHistoryUpdateManyWithWhereWithoutApplicationInput | StatusHistoryUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: StatusHistoryScalarWhereInput | StatusHistoryScalarWhereInput[]
  }

  export type ApplicationCreateNestedOneWithoutStatusHistoryInput = {
    create?: XOR<ApplicationCreateWithoutStatusHistoryInput, ApplicationUncheckedCreateWithoutStatusHistoryInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutStatusHistoryInput
    connect?: ApplicationWhereUniqueInput
  }

  export type ApplicationUpdateOneRequiredWithoutStatusHistoryNestedInput = {
    create?: XOR<ApplicationCreateWithoutStatusHistoryInput, ApplicationUncheckedCreateWithoutStatusHistoryInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutStatusHistoryInput
    upsert?: ApplicationUpsertWithoutStatusHistoryInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutStatusHistoryInput, ApplicationUpdateWithoutStatusHistoryInput>, ApplicationUncheckedUpdateWithoutStatusHistoryInput>
  }

  export type ApplicationCreateNestedOneWithoutAiInterviewsInput = {
    create?: XOR<ApplicationCreateWithoutAiInterviewsInput, ApplicationUncheckedCreateWithoutAiInterviewsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutAiInterviewsInput
    connect?: ApplicationWhereUniqueInput
  }

  export type AiInterviewQuestionCreateNestedManyWithoutAiInterviewInput = {
    create?: XOR<AiInterviewQuestionCreateWithoutAiInterviewInput, AiInterviewQuestionUncheckedCreateWithoutAiInterviewInput> | AiInterviewQuestionCreateWithoutAiInterviewInput[] | AiInterviewQuestionUncheckedCreateWithoutAiInterviewInput[]
    connectOrCreate?: AiInterviewQuestionCreateOrConnectWithoutAiInterviewInput | AiInterviewQuestionCreateOrConnectWithoutAiInterviewInput[]
    createMany?: AiInterviewQuestionCreateManyAiInterviewInputEnvelope
    connect?: AiInterviewQuestionWhereUniqueInput | AiInterviewQuestionWhereUniqueInput[]
  }

  export type AiInterviewQuestionUncheckedCreateNestedManyWithoutAiInterviewInput = {
    create?: XOR<AiInterviewQuestionCreateWithoutAiInterviewInput, AiInterviewQuestionUncheckedCreateWithoutAiInterviewInput> | AiInterviewQuestionCreateWithoutAiInterviewInput[] | AiInterviewQuestionUncheckedCreateWithoutAiInterviewInput[]
    connectOrCreate?: AiInterviewQuestionCreateOrConnectWithoutAiInterviewInput | AiInterviewQuestionCreateOrConnectWithoutAiInterviewInput[]
    createMany?: AiInterviewQuestionCreateManyAiInterviewInputEnvelope
    connect?: AiInterviewQuestionWhereUniqueInput | AiInterviewQuestionWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApplicationUpdateOneRequiredWithoutAiInterviewsNestedInput = {
    create?: XOR<ApplicationCreateWithoutAiInterviewsInput, ApplicationUncheckedCreateWithoutAiInterviewsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutAiInterviewsInput
    upsert?: ApplicationUpsertWithoutAiInterviewsInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutAiInterviewsInput, ApplicationUpdateWithoutAiInterviewsInput>, ApplicationUncheckedUpdateWithoutAiInterviewsInput>
  }

  export type AiInterviewQuestionUpdateManyWithoutAiInterviewNestedInput = {
    create?: XOR<AiInterviewQuestionCreateWithoutAiInterviewInput, AiInterviewQuestionUncheckedCreateWithoutAiInterviewInput> | AiInterviewQuestionCreateWithoutAiInterviewInput[] | AiInterviewQuestionUncheckedCreateWithoutAiInterviewInput[]
    connectOrCreate?: AiInterviewQuestionCreateOrConnectWithoutAiInterviewInput | AiInterviewQuestionCreateOrConnectWithoutAiInterviewInput[]
    upsert?: AiInterviewQuestionUpsertWithWhereUniqueWithoutAiInterviewInput | AiInterviewQuestionUpsertWithWhereUniqueWithoutAiInterviewInput[]
    createMany?: AiInterviewQuestionCreateManyAiInterviewInputEnvelope
    set?: AiInterviewQuestionWhereUniqueInput | AiInterviewQuestionWhereUniqueInput[]
    disconnect?: AiInterviewQuestionWhereUniqueInput | AiInterviewQuestionWhereUniqueInput[]
    delete?: AiInterviewQuestionWhereUniqueInput | AiInterviewQuestionWhereUniqueInput[]
    connect?: AiInterviewQuestionWhereUniqueInput | AiInterviewQuestionWhereUniqueInput[]
    update?: AiInterviewQuestionUpdateWithWhereUniqueWithoutAiInterviewInput | AiInterviewQuestionUpdateWithWhereUniqueWithoutAiInterviewInput[]
    updateMany?: AiInterviewQuestionUpdateManyWithWhereWithoutAiInterviewInput | AiInterviewQuestionUpdateManyWithWhereWithoutAiInterviewInput[]
    deleteMany?: AiInterviewQuestionScalarWhereInput | AiInterviewQuestionScalarWhereInput[]
  }

  export type AiInterviewQuestionUncheckedUpdateManyWithoutAiInterviewNestedInput = {
    create?: XOR<AiInterviewQuestionCreateWithoutAiInterviewInput, AiInterviewQuestionUncheckedCreateWithoutAiInterviewInput> | AiInterviewQuestionCreateWithoutAiInterviewInput[] | AiInterviewQuestionUncheckedCreateWithoutAiInterviewInput[]
    connectOrCreate?: AiInterviewQuestionCreateOrConnectWithoutAiInterviewInput | AiInterviewQuestionCreateOrConnectWithoutAiInterviewInput[]
    upsert?: AiInterviewQuestionUpsertWithWhereUniqueWithoutAiInterviewInput | AiInterviewQuestionUpsertWithWhereUniqueWithoutAiInterviewInput[]
    createMany?: AiInterviewQuestionCreateManyAiInterviewInputEnvelope
    set?: AiInterviewQuestionWhereUniqueInput | AiInterviewQuestionWhereUniqueInput[]
    disconnect?: AiInterviewQuestionWhereUniqueInput | AiInterviewQuestionWhereUniqueInput[]
    delete?: AiInterviewQuestionWhereUniqueInput | AiInterviewQuestionWhereUniqueInput[]
    connect?: AiInterviewQuestionWhereUniqueInput | AiInterviewQuestionWhereUniqueInput[]
    update?: AiInterviewQuestionUpdateWithWhereUniqueWithoutAiInterviewInput | AiInterviewQuestionUpdateWithWhereUniqueWithoutAiInterviewInput[]
    updateMany?: AiInterviewQuestionUpdateManyWithWhereWithoutAiInterviewInput | AiInterviewQuestionUpdateManyWithWhereWithoutAiInterviewInput[]
    deleteMany?: AiInterviewQuestionScalarWhereInput | AiInterviewQuestionScalarWhereInput[]
  }

  export type AiInterviewCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<AiInterviewCreateWithoutQuestionsInput, AiInterviewUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: AiInterviewCreateOrConnectWithoutQuestionsInput
    connect?: AiInterviewWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AiInterviewUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<AiInterviewCreateWithoutQuestionsInput, AiInterviewUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: AiInterviewCreateOrConnectWithoutQuestionsInput
    upsert?: AiInterviewUpsertWithoutQuestionsInput
    connect?: AiInterviewWhereUniqueInput
    update?: XOR<XOR<AiInterviewUpdateToOneWithWhereWithoutQuestionsInput, AiInterviewUpdateWithoutQuestionsInput>, AiInterviewUncheckedUpdateWithoutQuestionsInput>
  }

  export type ApplicationCreateNestedOneWithoutRemindersInput = {
    create?: XOR<ApplicationCreateWithoutRemindersInput, ApplicationUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutRemindersInput
    connect?: ApplicationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRemindersInput = {
    create?: XOR<UserCreateWithoutRemindersInput, UserUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRemindersInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ApplicationUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: XOR<ApplicationCreateWithoutRemindersInput, ApplicationUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutRemindersInput
    upsert?: ApplicationUpsertWithoutRemindersInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutRemindersInput, ApplicationUpdateWithoutRemindersInput>, ApplicationUncheckedUpdateWithoutRemindersInput>
  }

  export type UserUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: XOR<UserCreateWithoutRemindersInput, UserUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRemindersInput
    upsert?: UserUpsertWithoutRemindersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRemindersInput, UserUpdateWithoutRemindersInput>, UserUncheckedUpdateWithoutRemindersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedEnumApplicationSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationSource | EnumApplicationSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationSource[] | ListEnumApplicationSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationSource[] | ListEnumApplicationSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationSourceFilter<$PrismaModel> | $Enums.ApplicationSource
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type NestedEnumApplicationSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationSource | EnumApplicationSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationSource[] | ListEnumApplicationSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationSource[] | ListEnumApplicationSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationSourceWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationSourceFilter<$PrismaModel>
    _max?: NestedEnumApplicationSourceFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ApplicationCreateWithoutUserInput = {
    id?: string
    companyName: string
    jobTitle: string
    jobDescription: string
    status?: $Enums.ApplicationStatus
    source: $Enums.ApplicationSource
    dateApplied?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiInterviews?: AiInterviewCreateNestedManyWithoutApplicationInput
    reminders?: ReminderCreateNestedManyWithoutApplicationInput
    statusHistory?: StatusHistoryCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutUserInput = {
    id?: string
    companyName: string
    jobTitle: string
    jobDescription: string
    status?: $Enums.ApplicationStatus
    source: $Enums.ApplicationSource
    dateApplied?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiInterviews?: AiInterviewUncheckedCreateNestedManyWithoutApplicationInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutApplicationInput
    statusHistory?: StatusHistoryUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutUserInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput>
  }

  export type ApplicationCreateManyUserInputEnvelope = {
    data: ApplicationCreateManyUserInput | ApplicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReminderCreateWithoutUserInput = {
    id?: string
    reminderDate: Date | string
    isSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    application: ApplicationCreateNestedOneWithoutRemindersInput
  }

  export type ReminderUncheckedCreateWithoutUserInput = {
    id?: string
    applicationId: string
    reminderDate: Date | string
    isSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReminderCreateOrConnectWithoutUserInput = {
    where: ReminderWhereUniqueInput
    create: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput>
  }

  export type ReminderCreateManyUserInputEnvelope = {
    data: ReminderCreateManyUserInput | ReminderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutUserInput, ApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutUserInput, ApplicationUncheckedUpdateWithoutUserInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutUserInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: StringFilter<"Application"> | string
    companyName?: StringFilter<"Application"> | string
    jobTitle?: StringFilter<"Application"> | string
    jobDescription?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    source?: EnumApplicationSourceFilter<"Application"> | $Enums.ApplicationSource
    dateApplied?: DateTimeFilter<"Application"> | Date | string
    notes?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    userId?: StringFilter<"Application"> | string
  }

  export type ReminderUpsertWithWhereUniqueWithoutUserInput = {
    where: ReminderWhereUniqueInput
    update: XOR<ReminderUpdateWithoutUserInput, ReminderUncheckedUpdateWithoutUserInput>
    create: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput>
  }

  export type ReminderUpdateWithWhereUniqueWithoutUserInput = {
    where: ReminderWhereUniqueInput
    data: XOR<ReminderUpdateWithoutUserInput, ReminderUncheckedUpdateWithoutUserInput>
  }

  export type ReminderUpdateManyWithWhereWithoutUserInput = {
    where: ReminderScalarWhereInput
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyWithoutUserInput>
  }

  export type ReminderScalarWhereInput = {
    AND?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    OR?: ReminderScalarWhereInput[]
    NOT?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    id?: StringFilter<"Reminder"> | string
    applicationId?: StringFilter<"Reminder"> | string
    userId?: StringFilter<"Reminder"> | string
    reminderDate?: DateTimeFilter<"Reminder"> | Date | string
    isSent?: BoolFilter<"Reminder"> | boolean
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
    updatedAt?: DateTimeFilter<"Reminder"> | Date | string
  }

  export type UserCreateWithoutApplicationsInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    profilePicture?: string | null
    targetRole?: string | null
    experienceLevel?: string | null
    resumeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reminders?: ReminderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApplicationsInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    profilePicture?: string | null
    targetRole?: string | null
    experienceLevel?: string | null
    resumeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
  }

  export type AiInterviewCreateWithoutApplicationInput = {
    id?: string
    overallScore?: number | null
    overallFeedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: AiInterviewQuestionCreateNestedManyWithoutAiInterviewInput
  }

  export type AiInterviewUncheckedCreateWithoutApplicationInput = {
    id?: string
    overallScore?: number | null
    overallFeedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: AiInterviewQuestionUncheckedCreateNestedManyWithoutAiInterviewInput
  }

  export type AiInterviewCreateOrConnectWithoutApplicationInput = {
    where: AiInterviewWhereUniqueInput
    create: XOR<AiInterviewCreateWithoutApplicationInput, AiInterviewUncheckedCreateWithoutApplicationInput>
  }

  export type AiInterviewCreateManyApplicationInputEnvelope = {
    data: AiInterviewCreateManyApplicationInput | AiInterviewCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type ReminderCreateWithoutApplicationInput = {
    id?: string
    reminderDate: Date | string
    isSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRemindersInput
  }

  export type ReminderUncheckedCreateWithoutApplicationInput = {
    id?: string
    userId: string
    reminderDate: Date | string
    isSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReminderCreateOrConnectWithoutApplicationInput = {
    where: ReminderWhereUniqueInput
    create: XOR<ReminderCreateWithoutApplicationInput, ReminderUncheckedCreateWithoutApplicationInput>
  }

  export type ReminderCreateManyApplicationInputEnvelope = {
    data: ReminderCreateManyApplicationInput | ReminderCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type StatusHistoryCreateWithoutApplicationInput = {
    id?: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
  }

  export type StatusHistoryUncheckedCreateWithoutApplicationInput = {
    id?: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
  }

  export type StatusHistoryCreateOrConnectWithoutApplicationInput = {
    where: StatusHistoryWhereUniqueInput
    create: XOR<StatusHistoryCreateWithoutApplicationInput, StatusHistoryUncheckedCreateWithoutApplicationInput>
  }

  export type StatusHistoryCreateManyApplicationInputEnvelope = {
    data: StatusHistoryCreateManyApplicationInput | StatusHistoryCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutApplicationsInput = {
    update: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminders?: ReminderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AiInterviewUpsertWithWhereUniqueWithoutApplicationInput = {
    where: AiInterviewWhereUniqueInput
    update: XOR<AiInterviewUpdateWithoutApplicationInput, AiInterviewUncheckedUpdateWithoutApplicationInput>
    create: XOR<AiInterviewCreateWithoutApplicationInput, AiInterviewUncheckedCreateWithoutApplicationInput>
  }

  export type AiInterviewUpdateWithWhereUniqueWithoutApplicationInput = {
    where: AiInterviewWhereUniqueInput
    data: XOR<AiInterviewUpdateWithoutApplicationInput, AiInterviewUncheckedUpdateWithoutApplicationInput>
  }

  export type AiInterviewUpdateManyWithWhereWithoutApplicationInput = {
    where: AiInterviewScalarWhereInput
    data: XOR<AiInterviewUpdateManyMutationInput, AiInterviewUncheckedUpdateManyWithoutApplicationInput>
  }

  export type AiInterviewScalarWhereInput = {
    AND?: AiInterviewScalarWhereInput | AiInterviewScalarWhereInput[]
    OR?: AiInterviewScalarWhereInput[]
    NOT?: AiInterviewScalarWhereInput | AiInterviewScalarWhereInput[]
    id?: StringFilter<"AiInterview"> | string
    applicationId?: StringFilter<"AiInterview"> | string
    overallScore?: IntNullableFilter<"AiInterview"> | number | null
    overallFeedback?: StringNullableFilter<"AiInterview"> | string | null
    createdAt?: DateTimeFilter<"AiInterview"> | Date | string
    updatedAt?: DateTimeFilter<"AiInterview"> | Date | string
  }

  export type ReminderUpsertWithWhereUniqueWithoutApplicationInput = {
    where: ReminderWhereUniqueInput
    update: XOR<ReminderUpdateWithoutApplicationInput, ReminderUncheckedUpdateWithoutApplicationInput>
    create: XOR<ReminderCreateWithoutApplicationInput, ReminderUncheckedCreateWithoutApplicationInput>
  }

  export type ReminderUpdateWithWhereUniqueWithoutApplicationInput = {
    where: ReminderWhereUniqueInput
    data: XOR<ReminderUpdateWithoutApplicationInput, ReminderUncheckedUpdateWithoutApplicationInput>
  }

  export type ReminderUpdateManyWithWhereWithoutApplicationInput = {
    where: ReminderScalarWhereInput
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyWithoutApplicationInput>
  }

  export type StatusHistoryUpsertWithWhereUniqueWithoutApplicationInput = {
    where: StatusHistoryWhereUniqueInput
    update: XOR<StatusHistoryUpdateWithoutApplicationInput, StatusHistoryUncheckedUpdateWithoutApplicationInput>
    create: XOR<StatusHistoryCreateWithoutApplicationInput, StatusHistoryUncheckedCreateWithoutApplicationInput>
  }

  export type StatusHistoryUpdateWithWhereUniqueWithoutApplicationInput = {
    where: StatusHistoryWhereUniqueInput
    data: XOR<StatusHistoryUpdateWithoutApplicationInput, StatusHistoryUncheckedUpdateWithoutApplicationInput>
  }

  export type StatusHistoryUpdateManyWithWhereWithoutApplicationInput = {
    where: StatusHistoryScalarWhereInput
    data: XOR<StatusHistoryUpdateManyMutationInput, StatusHistoryUncheckedUpdateManyWithoutApplicationInput>
  }

  export type StatusHistoryScalarWhereInput = {
    AND?: StatusHistoryScalarWhereInput | StatusHistoryScalarWhereInput[]
    OR?: StatusHistoryScalarWhereInput[]
    NOT?: StatusHistoryScalarWhereInput | StatusHistoryScalarWhereInput[]
    id?: StringFilter<"StatusHistory"> | string
    applicationId?: StringFilter<"StatusHistory"> | string
    status?: EnumApplicationStatusFilter<"StatusHistory"> | $Enums.ApplicationStatus
    createdAt?: DateTimeFilter<"StatusHistory"> | Date | string
  }

  export type ApplicationCreateWithoutStatusHistoryInput = {
    id?: string
    companyName: string
    jobTitle: string
    jobDescription: string
    status?: $Enums.ApplicationStatus
    source: $Enums.ApplicationSource
    dateApplied?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicationsInput
    aiInterviews?: AiInterviewCreateNestedManyWithoutApplicationInput
    reminders?: ReminderCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutStatusHistoryInput = {
    id?: string
    companyName: string
    jobTitle: string
    jobDescription: string
    status?: $Enums.ApplicationStatus
    source: $Enums.ApplicationSource
    dateApplied?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    aiInterviews?: AiInterviewUncheckedCreateNestedManyWithoutApplicationInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutStatusHistoryInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutStatusHistoryInput, ApplicationUncheckedCreateWithoutStatusHistoryInput>
  }

  export type ApplicationUpsertWithoutStatusHistoryInput = {
    update: XOR<ApplicationUpdateWithoutStatusHistoryInput, ApplicationUncheckedUpdateWithoutStatusHistoryInput>
    create: XOR<ApplicationCreateWithoutStatusHistoryInput, ApplicationUncheckedCreateWithoutStatusHistoryInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutStatusHistoryInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutStatusHistoryInput, ApplicationUncheckedUpdateWithoutStatusHistoryInput>
  }

  export type ApplicationUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    source?: EnumApplicationSourceFieldUpdateOperationsInput | $Enums.ApplicationSource
    dateApplied?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    aiInterviews?: AiInterviewUpdateManyWithoutApplicationNestedInput
    reminders?: ReminderUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    source?: EnumApplicationSourceFieldUpdateOperationsInput | $Enums.ApplicationSource
    dateApplied?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    aiInterviews?: AiInterviewUncheckedUpdateManyWithoutApplicationNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateWithoutAiInterviewsInput = {
    id?: string
    companyName: string
    jobTitle: string
    jobDescription: string
    status?: $Enums.ApplicationStatus
    source: $Enums.ApplicationSource
    dateApplied?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicationsInput
    reminders?: ReminderCreateNestedManyWithoutApplicationInput
    statusHistory?: StatusHistoryCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutAiInterviewsInput = {
    id?: string
    companyName: string
    jobTitle: string
    jobDescription: string
    status?: $Enums.ApplicationStatus
    source: $Enums.ApplicationSource
    dateApplied?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    reminders?: ReminderUncheckedCreateNestedManyWithoutApplicationInput
    statusHistory?: StatusHistoryUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutAiInterviewsInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutAiInterviewsInput, ApplicationUncheckedCreateWithoutAiInterviewsInput>
  }

  export type AiInterviewQuestionCreateWithoutAiInterviewInput = {
    id?: string
    question: string
    userAnswer?: string | null
    questionNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiInterviewQuestionUncheckedCreateWithoutAiInterviewInput = {
    id?: string
    question: string
    userAnswer?: string | null
    questionNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiInterviewQuestionCreateOrConnectWithoutAiInterviewInput = {
    where: AiInterviewQuestionWhereUniqueInput
    create: XOR<AiInterviewQuestionCreateWithoutAiInterviewInput, AiInterviewQuestionUncheckedCreateWithoutAiInterviewInput>
  }

  export type AiInterviewQuestionCreateManyAiInterviewInputEnvelope = {
    data: AiInterviewQuestionCreateManyAiInterviewInput | AiInterviewQuestionCreateManyAiInterviewInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationUpsertWithoutAiInterviewsInput = {
    update: XOR<ApplicationUpdateWithoutAiInterviewsInput, ApplicationUncheckedUpdateWithoutAiInterviewsInput>
    create: XOR<ApplicationCreateWithoutAiInterviewsInput, ApplicationUncheckedCreateWithoutAiInterviewsInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutAiInterviewsInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutAiInterviewsInput, ApplicationUncheckedUpdateWithoutAiInterviewsInput>
  }

  export type ApplicationUpdateWithoutAiInterviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    source?: EnumApplicationSourceFieldUpdateOperationsInput | $Enums.ApplicationSource
    dateApplied?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    reminders?: ReminderUpdateManyWithoutApplicationNestedInput
    statusHistory?: StatusHistoryUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutAiInterviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    source?: EnumApplicationSourceFieldUpdateOperationsInput | $Enums.ApplicationSource
    dateApplied?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    reminders?: ReminderUncheckedUpdateManyWithoutApplicationNestedInput
    statusHistory?: StatusHistoryUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type AiInterviewQuestionUpsertWithWhereUniqueWithoutAiInterviewInput = {
    where: AiInterviewQuestionWhereUniqueInput
    update: XOR<AiInterviewQuestionUpdateWithoutAiInterviewInput, AiInterviewQuestionUncheckedUpdateWithoutAiInterviewInput>
    create: XOR<AiInterviewQuestionCreateWithoutAiInterviewInput, AiInterviewQuestionUncheckedCreateWithoutAiInterviewInput>
  }

  export type AiInterviewQuestionUpdateWithWhereUniqueWithoutAiInterviewInput = {
    where: AiInterviewQuestionWhereUniqueInput
    data: XOR<AiInterviewQuestionUpdateWithoutAiInterviewInput, AiInterviewQuestionUncheckedUpdateWithoutAiInterviewInput>
  }

  export type AiInterviewQuestionUpdateManyWithWhereWithoutAiInterviewInput = {
    where: AiInterviewQuestionScalarWhereInput
    data: XOR<AiInterviewQuestionUpdateManyMutationInput, AiInterviewQuestionUncheckedUpdateManyWithoutAiInterviewInput>
  }

  export type AiInterviewQuestionScalarWhereInput = {
    AND?: AiInterviewQuestionScalarWhereInput | AiInterviewQuestionScalarWhereInput[]
    OR?: AiInterviewQuestionScalarWhereInput[]
    NOT?: AiInterviewQuestionScalarWhereInput | AiInterviewQuestionScalarWhereInput[]
    id?: StringFilter<"AiInterviewQuestion"> | string
    question?: StringFilter<"AiInterviewQuestion"> | string
    userAnswer?: StringNullableFilter<"AiInterviewQuestion"> | string | null
    aiInterviewId?: StringFilter<"AiInterviewQuestion"> | string
    questionNumber?: IntFilter<"AiInterviewQuestion"> | number
    createdAt?: DateTimeFilter<"AiInterviewQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"AiInterviewQuestion"> | Date | string
  }

  export type AiInterviewCreateWithoutQuestionsInput = {
    id?: string
    overallScore?: number | null
    overallFeedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    application: ApplicationCreateNestedOneWithoutAiInterviewsInput
  }

  export type AiInterviewUncheckedCreateWithoutQuestionsInput = {
    id?: string
    applicationId: string
    overallScore?: number | null
    overallFeedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiInterviewCreateOrConnectWithoutQuestionsInput = {
    where: AiInterviewWhereUniqueInput
    create: XOR<AiInterviewCreateWithoutQuestionsInput, AiInterviewUncheckedCreateWithoutQuestionsInput>
  }

  export type AiInterviewUpsertWithoutQuestionsInput = {
    update: XOR<AiInterviewUpdateWithoutQuestionsInput, AiInterviewUncheckedUpdateWithoutQuestionsInput>
    create: XOR<AiInterviewCreateWithoutQuestionsInput, AiInterviewUncheckedCreateWithoutQuestionsInput>
    where?: AiInterviewWhereInput
  }

  export type AiInterviewUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: AiInterviewWhereInput
    data: XOR<AiInterviewUpdateWithoutQuestionsInput, AiInterviewUncheckedUpdateWithoutQuestionsInput>
  }

  export type AiInterviewUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableIntFieldUpdateOperationsInput | number | null
    overallFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutAiInterviewsNestedInput
  }

  export type AiInterviewUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableIntFieldUpdateOperationsInput | number | null
    overallFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateWithoutRemindersInput = {
    id?: string
    companyName: string
    jobTitle: string
    jobDescription: string
    status?: $Enums.ApplicationStatus
    source: $Enums.ApplicationSource
    dateApplied?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicationsInput
    aiInterviews?: AiInterviewCreateNestedManyWithoutApplicationInput
    statusHistory?: StatusHistoryCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutRemindersInput = {
    id?: string
    companyName: string
    jobTitle: string
    jobDescription: string
    status?: $Enums.ApplicationStatus
    source: $Enums.ApplicationSource
    dateApplied?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    aiInterviews?: AiInterviewUncheckedCreateNestedManyWithoutApplicationInput
    statusHistory?: StatusHistoryUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutRemindersInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutRemindersInput, ApplicationUncheckedCreateWithoutRemindersInput>
  }

  export type UserCreateWithoutRemindersInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    profilePicture?: string | null
    targetRole?: string | null
    experienceLevel?: string | null
    resumeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRemindersInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    profilePicture?: string | null
    targetRole?: string | null
    experienceLevel?: string | null
    resumeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRemindersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRemindersInput, UserUncheckedCreateWithoutRemindersInput>
  }

  export type ApplicationUpsertWithoutRemindersInput = {
    update: XOR<ApplicationUpdateWithoutRemindersInput, ApplicationUncheckedUpdateWithoutRemindersInput>
    create: XOR<ApplicationCreateWithoutRemindersInput, ApplicationUncheckedCreateWithoutRemindersInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutRemindersInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutRemindersInput, ApplicationUncheckedUpdateWithoutRemindersInput>
  }

  export type ApplicationUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    source?: EnumApplicationSourceFieldUpdateOperationsInput | $Enums.ApplicationSource
    dateApplied?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    aiInterviews?: AiInterviewUpdateManyWithoutApplicationNestedInput
    statusHistory?: StatusHistoryUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    source?: EnumApplicationSourceFieldUpdateOperationsInput | $Enums.ApplicationSource
    dateApplied?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    aiInterviews?: AiInterviewUncheckedUpdateManyWithoutApplicationNestedInput
    statusHistory?: StatusHistoryUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type UserUpsertWithoutRemindersInput = {
    update: XOR<UserUpdateWithoutRemindersInput, UserUncheckedUpdateWithoutRemindersInput>
    create: XOR<UserCreateWithoutRemindersInput, UserUncheckedCreateWithoutRemindersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRemindersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRemindersInput, UserUncheckedUpdateWithoutRemindersInput>
  }

  export type UserUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApplicationCreateManyUserInput = {
    id?: string
    companyName: string
    jobTitle: string
    jobDescription: string
    status?: $Enums.ApplicationStatus
    source: $Enums.ApplicationSource
    dateApplied?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReminderCreateManyUserInput = {
    id?: string
    applicationId: string
    reminderDate: Date | string
    isSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    source?: EnumApplicationSourceFieldUpdateOperationsInput | $Enums.ApplicationSource
    dateApplied?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiInterviews?: AiInterviewUpdateManyWithoutApplicationNestedInput
    reminders?: ReminderUpdateManyWithoutApplicationNestedInput
    statusHistory?: StatusHistoryUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    source?: EnumApplicationSourceFieldUpdateOperationsInput | $Enums.ApplicationSource
    dateApplied?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiInterviews?: AiInterviewUncheckedUpdateManyWithoutApplicationNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutApplicationNestedInput
    statusHistory?: StatusHistoryUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    source?: EnumApplicationSourceFieldUpdateOperationsInput | $Enums.ApplicationSource
    dateApplied?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type ReminderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    reminderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    reminderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiInterviewCreateManyApplicationInput = {
    id?: string
    overallScore?: number | null
    overallFeedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReminderCreateManyApplicationInput = {
    id?: string
    userId: string
    reminderDate: Date | string
    isSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StatusHistoryCreateManyApplicationInput = {
    id?: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
  }

  export type AiInterviewUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableIntFieldUpdateOperationsInput | number | null
    overallFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: AiInterviewQuestionUpdateManyWithoutAiInterviewNestedInput
  }

  export type AiInterviewUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableIntFieldUpdateOperationsInput | number | null
    overallFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: AiInterviewQuestionUncheckedUpdateManyWithoutAiInterviewNestedInput
  }

  export type AiInterviewUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableIntFieldUpdateOperationsInput | number | null
    overallFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type ReminderUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reminderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reminderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusHistoryUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusHistoryUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusHistoryUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiInterviewQuestionCreateManyAiInterviewInput = {
    id?: string
    question: string
    userAnswer?: string | null
    questionNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiInterviewQuestionUpdateWithoutAiInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    questionNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiInterviewQuestionUncheckedUpdateWithoutAiInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    questionNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiInterviewQuestionUncheckedUpdateManyWithoutAiInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    questionNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApplicationCountOutputTypeDefaultArgs instead
     */
    export type ApplicationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApplicationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AiInterviewCountOutputTypeDefaultArgs instead
     */
    export type AiInterviewCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AiInterviewCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApplicationDefaultArgs instead
     */
    export type ApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApplicationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StatusHistoryDefaultArgs instead
     */
    export type StatusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StatusHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AiInterviewDefaultArgs instead
     */
    export type AiInterviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AiInterviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AiInterviewQuestionDefaultArgs instead
     */
    export type AiInterviewQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AiInterviewQuestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReminderDefaultArgs instead
     */
    export type ReminderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReminderDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}