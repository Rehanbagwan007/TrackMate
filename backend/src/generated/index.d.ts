
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
 * Model Institute
 * 
 */
export type Institute = $Result.DefaultSelection<Prisma.$InstitutePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model StudentAcademicProfile
 * 
 */
export type StudentAcademicProfile = $Result.DefaultSelection<Prisma.$StudentAcademicProfilePayload>
/**
 * Model FacultySubject
 * 
 */
export type FacultySubject = $Result.DefaultSelection<Prisma.$FacultySubjectPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Institutes
 * const institutes = await prisma.institute.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Institutes
   * const institutes = await prisma.institute.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.institute`: Exposes CRUD operations for the **Institute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Institutes
    * const institutes = await prisma.institute.findMany()
    * ```
    */
  get institute(): Prisma.InstituteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentAcademicProfile`: Exposes CRUD operations for the **StudentAcademicProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentAcademicProfiles
    * const studentAcademicProfiles = await prisma.studentAcademicProfile.findMany()
    * ```
    */
  get studentAcademicProfile(): Prisma.StudentAcademicProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facultySubject`: Exposes CRUD operations for the **FacultySubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacultySubjects
    * const facultySubjects = await prisma.facultySubject.findMany()
    * ```
    */
  get facultySubject(): Prisma.FacultySubjectDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Institute: 'Institute',
    User: 'User',
    Department: 'Department',
    StudentAcademicProfile: 'StudentAcademicProfile',
    FacultySubject: 'FacultySubject'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "institute" | "user" | "department" | "studentAcademicProfile" | "facultySubject"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Institute: {
        payload: Prisma.$InstitutePayload<ExtArgs>
        fields: Prisma.InstituteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstituteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstituteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutePayload>
          }
          findFirst: {
            args: Prisma.InstituteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstituteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutePayload>
          }
          findMany: {
            args: Prisma.InstituteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutePayload>[]
          }
          create: {
            args: Prisma.InstituteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutePayload>
          }
          createMany: {
            args: Prisma.InstituteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstituteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutePayload>[]
          }
          delete: {
            args: Prisma.InstituteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutePayload>
          }
          update: {
            args: Prisma.InstituteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutePayload>
          }
          deleteMany: {
            args: Prisma.InstituteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstituteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstituteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutePayload>[]
          }
          upsert: {
            args: Prisma.InstituteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutePayload>
          }
          aggregate: {
            args: Prisma.InstituteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstitute>
          }
          groupBy: {
            args: Prisma.InstituteGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstituteGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstituteCountArgs<ExtArgs>
            result: $Utils.Optional<InstituteCountAggregateOutputType> | number
          }
        }
      }
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      StudentAcademicProfile: {
        payload: Prisma.$StudentAcademicProfilePayload<ExtArgs>
        fields: Prisma.StudentAcademicProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentAcademicProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentAcademicProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicProfilePayload>
          }
          findFirst: {
            args: Prisma.StudentAcademicProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentAcademicProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicProfilePayload>
          }
          findMany: {
            args: Prisma.StudentAcademicProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicProfilePayload>[]
          }
          create: {
            args: Prisma.StudentAcademicProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicProfilePayload>
          }
          createMany: {
            args: Prisma.StudentAcademicProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentAcademicProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicProfilePayload>[]
          }
          delete: {
            args: Prisma.StudentAcademicProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicProfilePayload>
          }
          update: {
            args: Prisma.StudentAcademicProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicProfilePayload>
          }
          deleteMany: {
            args: Prisma.StudentAcademicProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentAcademicProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentAcademicProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicProfilePayload>[]
          }
          upsert: {
            args: Prisma.StudentAcademicProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAcademicProfilePayload>
          }
          aggregate: {
            args: Prisma.StudentAcademicProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentAcademicProfile>
          }
          groupBy: {
            args: Prisma.StudentAcademicProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentAcademicProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentAcademicProfileCountArgs<ExtArgs>
            result: $Utils.Optional<StudentAcademicProfileCountAggregateOutputType> | number
          }
        }
      }
      FacultySubject: {
        payload: Prisma.$FacultySubjectPayload<ExtArgs>
        fields: Prisma.FacultySubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacultySubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacultySubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload>
          }
          findFirst: {
            args: Prisma.FacultySubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacultySubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload>
          }
          findMany: {
            args: Prisma.FacultySubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload>[]
          }
          create: {
            args: Prisma.FacultySubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload>
          }
          createMany: {
            args: Prisma.FacultySubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacultySubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload>[]
          }
          delete: {
            args: Prisma.FacultySubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload>
          }
          update: {
            args: Prisma.FacultySubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload>
          }
          deleteMany: {
            args: Prisma.FacultySubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacultySubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacultySubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload>[]
          }
          upsert: {
            args: Prisma.FacultySubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload>
          }
          aggregate: {
            args: Prisma.FacultySubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacultySubject>
          }
          groupBy: {
            args: Prisma.FacultySubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacultySubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacultySubjectCountArgs<ExtArgs>
            result: $Utils.Optional<FacultySubjectCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    institute?: InstituteOmit
    user?: UserOmit
    department?: DepartmentOmit
    studentAcademicProfile?: StudentAcademicProfileOmit
    facultySubject?: FacultySubjectOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type InstituteCountOutputType
   */

  export type InstituteCountOutputType = {
    users: number
    departments: number
    students: number
  }

  export type InstituteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | InstituteCountOutputTypeCountUsersArgs
    departments?: boolean | InstituteCountOutputTypeCountDepartmentsArgs
    students?: boolean | InstituteCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * InstituteCountOutputType without action
   */
  export type InstituteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstituteCountOutputType
     */
    select?: InstituteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstituteCountOutputType without action
   */
  export type InstituteCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * InstituteCountOutputType without action
   */
  export type InstituteCountOutputTypeCountDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }

  /**
   * InstituteCountOutputType without action
   */
  export type InstituteCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAcademicProfileWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    subjectsTaught: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjectsTaught?: boolean | UserCountOutputTypeCountSubjectsTaughtArgs
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
  export type UserCountOutputTypeCountSubjectsTaughtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultySubjectWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    members: number
    faculty: number
    students: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | DepartmentCountOutputTypeCountMembersArgs
    faculty?: boolean | DepartmentCountOutputTypeCountFacultyArgs
    students?: boolean | DepartmentCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountFacultyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultySubjectWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAcademicProfileWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Institute
   */

  export type AggregateInstitute = {
    _count: InstituteCountAggregateOutputType | null
    _min: InstituteMinAggregateOutputType | null
    _max: InstituteMaxAggregateOutputType | null
  }

  export type InstituteMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstituteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstituteCountAggregateOutputType = {
    id: number
    name: number
    code: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InstituteMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstituteMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstituteCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InstituteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Institute to aggregate.
     */
    where?: InstituteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutes to fetch.
     */
    orderBy?: InstituteOrderByWithRelationInput | InstituteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstituteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Institutes
    **/
    _count?: true | InstituteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstituteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstituteMaxAggregateInputType
  }

  export type GetInstituteAggregateType<T extends InstituteAggregateArgs> = {
        [P in keyof T & keyof AggregateInstitute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstitute[P]>
      : GetScalarType<T[P], AggregateInstitute[P]>
  }




  export type InstituteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstituteWhereInput
    orderBy?: InstituteOrderByWithAggregationInput | InstituteOrderByWithAggregationInput[]
    by: InstituteScalarFieldEnum[] | InstituteScalarFieldEnum
    having?: InstituteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstituteCountAggregateInputType | true
    _min?: InstituteMinAggregateInputType
    _max?: InstituteMaxAggregateInputType
  }

  export type InstituteGroupByOutputType = {
    id: string
    name: string
    code: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: InstituteCountAggregateOutputType | null
    _min: InstituteMinAggregateOutputType | null
    _max: InstituteMaxAggregateOutputType | null
  }

  type GetInstituteGroupByPayload<T extends InstituteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstituteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstituteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstituteGroupByOutputType[P]>
            : GetScalarType<T[P], InstituteGroupByOutputType[P]>
        }
      >
    >


  export type InstituteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Institute$usersArgs<ExtArgs>
    departments?: boolean | Institute$departmentsArgs<ExtArgs>
    students?: boolean | Institute$studentsArgs<ExtArgs>
    _count?: boolean | InstituteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institute"]>

  export type InstituteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["institute"]>

  export type InstituteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["institute"]>

  export type InstituteSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InstituteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["institute"]>
  export type InstituteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Institute$usersArgs<ExtArgs>
    departments?: boolean | Institute$departmentsArgs<ExtArgs>
    students?: boolean | Institute$studentsArgs<ExtArgs>
    _count?: boolean | InstituteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstituteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstituteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstitutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Institute"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      departments: Prisma.$DepartmentPayload<ExtArgs>[]
      students: Prisma.$StudentAcademicProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["institute"]>
    composites: {}
  }

  type InstituteGetPayload<S extends boolean | null | undefined | InstituteDefaultArgs> = $Result.GetResult<Prisma.$InstitutePayload, S>

  type InstituteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstituteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstituteCountAggregateInputType | true
    }

  export interface InstituteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Institute'], meta: { name: 'Institute' } }
    /**
     * Find zero or one Institute that matches the filter.
     * @param {InstituteFindUniqueArgs} args - Arguments to find a Institute
     * @example
     * // Get one Institute
     * const institute = await prisma.institute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstituteFindUniqueArgs>(args: SelectSubset<T, InstituteFindUniqueArgs<ExtArgs>>): Prisma__InstituteClient<$Result.GetResult<Prisma.$InstitutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Institute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstituteFindUniqueOrThrowArgs} args - Arguments to find a Institute
     * @example
     * // Get one Institute
     * const institute = await prisma.institute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstituteFindUniqueOrThrowArgs>(args: SelectSubset<T, InstituteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstituteClient<$Result.GetResult<Prisma.$InstitutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituteFindFirstArgs} args - Arguments to find a Institute
     * @example
     * // Get one Institute
     * const institute = await prisma.institute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstituteFindFirstArgs>(args?: SelectSubset<T, InstituteFindFirstArgs<ExtArgs>>): Prisma__InstituteClient<$Result.GetResult<Prisma.$InstitutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituteFindFirstOrThrowArgs} args - Arguments to find a Institute
     * @example
     * // Get one Institute
     * const institute = await prisma.institute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstituteFindFirstOrThrowArgs>(args?: SelectSubset<T, InstituteFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstituteClient<$Result.GetResult<Prisma.$InstitutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Institutes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Institutes
     * const institutes = await prisma.institute.findMany()
     * 
     * // Get first 10 Institutes
     * const institutes = await prisma.institute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instituteWithIdOnly = await prisma.institute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstituteFindManyArgs>(args?: SelectSubset<T, InstituteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Institute.
     * @param {InstituteCreateArgs} args - Arguments to create a Institute.
     * @example
     * // Create one Institute
     * const Institute = await prisma.institute.create({
     *   data: {
     *     // ... data to create a Institute
     *   }
     * })
     * 
     */
    create<T extends InstituteCreateArgs>(args: SelectSubset<T, InstituteCreateArgs<ExtArgs>>): Prisma__InstituteClient<$Result.GetResult<Prisma.$InstitutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Institutes.
     * @param {InstituteCreateManyArgs} args - Arguments to create many Institutes.
     * @example
     * // Create many Institutes
     * const institute = await prisma.institute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstituteCreateManyArgs>(args?: SelectSubset<T, InstituteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Institutes and returns the data saved in the database.
     * @param {InstituteCreateManyAndReturnArgs} args - Arguments to create many Institutes.
     * @example
     * // Create many Institutes
     * const institute = await prisma.institute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Institutes and only return the `id`
     * const instituteWithIdOnly = await prisma.institute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstituteCreateManyAndReturnArgs>(args?: SelectSubset<T, InstituteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Institute.
     * @param {InstituteDeleteArgs} args - Arguments to delete one Institute.
     * @example
     * // Delete one Institute
     * const Institute = await prisma.institute.delete({
     *   where: {
     *     // ... filter to delete one Institute
     *   }
     * })
     * 
     */
    delete<T extends InstituteDeleteArgs>(args: SelectSubset<T, InstituteDeleteArgs<ExtArgs>>): Prisma__InstituteClient<$Result.GetResult<Prisma.$InstitutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Institute.
     * @param {InstituteUpdateArgs} args - Arguments to update one Institute.
     * @example
     * // Update one Institute
     * const institute = await prisma.institute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstituteUpdateArgs>(args: SelectSubset<T, InstituteUpdateArgs<ExtArgs>>): Prisma__InstituteClient<$Result.GetResult<Prisma.$InstitutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Institutes.
     * @param {InstituteDeleteManyArgs} args - Arguments to filter Institutes to delete.
     * @example
     * // Delete a few Institutes
     * const { count } = await prisma.institute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstituteDeleteManyArgs>(args?: SelectSubset<T, InstituteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Institutes
     * const institute = await prisma.institute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstituteUpdateManyArgs>(args: SelectSubset<T, InstituteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutes and returns the data updated in the database.
     * @param {InstituteUpdateManyAndReturnArgs} args - Arguments to update many Institutes.
     * @example
     * // Update many Institutes
     * const institute = await prisma.institute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Institutes and only return the `id`
     * const instituteWithIdOnly = await prisma.institute.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstituteUpdateManyAndReturnArgs>(args: SelectSubset<T, InstituteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Institute.
     * @param {InstituteUpsertArgs} args - Arguments to update or create a Institute.
     * @example
     * // Update or create a Institute
     * const institute = await prisma.institute.upsert({
     *   create: {
     *     // ... data to create a Institute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Institute we want to update
     *   }
     * })
     */
    upsert<T extends InstituteUpsertArgs>(args: SelectSubset<T, InstituteUpsertArgs<ExtArgs>>): Prisma__InstituteClient<$Result.GetResult<Prisma.$InstitutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Institutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituteCountArgs} args - Arguments to filter Institutes to count.
     * @example
     * // Count the number of Institutes
     * const count = await prisma.institute.count({
     *   where: {
     *     // ... the filter for the Institutes we want to count
     *   }
     * })
    **/
    count<T extends InstituteCountArgs>(
      args?: Subset<T, InstituteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstituteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Institute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstituteAggregateArgs>(args: Subset<T, InstituteAggregateArgs>): Prisma.PrismaPromise<GetInstituteAggregateType<T>>

    /**
     * Group by Institute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituteGroupByArgs} args - Group by arguments.
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
      T extends InstituteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstituteGroupByArgs['orderBy'] }
        : { orderBy?: InstituteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstituteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstituteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Institute model
   */
  readonly fields: InstituteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Institute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstituteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Institute$usersArgs<ExtArgs> = {}>(args?: Subset<T, Institute$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    departments<T extends Institute$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, Institute$departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends Institute$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Institute$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAcademicProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Institute model
   */
  interface InstituteFieldRefs {
    readonly id: FieldRef<"Institute", 'String'>
    readonly name: FieldRef<"Institute", 'String'>
    readonly code: FieldRef<"Institute", 'String'>
    readonly status: FieldRef<"Institute", 'String'>
    readonly createdAt: FieldRef<"Institute", 'DateTime'>
    readonly updatedAt: FieldRef<"Institute", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Institute findUnique
   */
  export type InstituteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institute
     */
    select?: InstituteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institute
     */
    omit?: InstituteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituteInclude<ExtArgs> | null
    /**
     * Filter, which Institute to fetch.
     */
    where: InstituteWhereUniqueInput
  }

  /**
   * Institute findUniqueOrThrow
   */
  export type InstituteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institute
     */
    select?: InstituteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institute
     */
    omit?: InstituteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituteInclude<ExtArgs> | null
    /**
     * Filter, which Institute to fetch.
     */
    where: InstituteWhereUniqueInput
  }

  /**
   * Institute findFirst
   */
  export type InstituteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institute
     */
    select?: InstituteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institute
     */
    omit?: InstituteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituteInclude<ExtArgs> | null
    /**
     * Filter, which Institute to fetch.
     */
    where?: InstituteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutes to fetch.
     */
    orderBy?: InstituteOrderByWithRelationInput | InstituteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutes.
     */
    cursor?: InstituteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutes.
     */
    distinct?: InstituteScalarFieldEnum | InstituteScalarFieldEnum[]
  }

  /**
   * Institute findFirstOrThrow
   */
  export type InstituteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institute
     */
    select?: InstituteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institute
     */
    omit?: InstituteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituteInclude<ExtArgs> | null
    /**
     * Filter, which Institute to fetch.
     */
    where?: InstituteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutes to fetch.
     */
    orderBy?: InstituteOrderByWithRelationInput | InstituteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutes.
     */
    cursor?: InstituteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutes.
     */
    distinct?: InstituteScalarFieldEnum | InstituteScalarFieldEnum[]
  }

  /**
   * Institute findMany
   */
  export type InstituteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institute
     */
    select?: InstituteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institute
     */
    omit?: InstituteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituteInclude<ExtArgs> | null
    /**
     * Filter, which Institutes to fetch.
     */
    where?: InstituteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutes to fetch.
     */
    orderBy?: InstituteOrderByWithRelationInput | InstituteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Institutes.
     */
    cursor?: InstituteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutes.
     */
    skip?: number
    distinct?: InstituteScalarFieldEnum | InstituteScalarFieldEnum[]
  }

  /**
   * Institute create
   */
  export type InstituteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institute
     */
    select?: InstituteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institute
     */
    omit?: InstituteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituteInclude<ExtArgs> | null
    /**
     * The data needed to create a Institute.
     */
    data: XOR<InstituteCreateInput, InstituteUncheckedCreateInput>
  }

  /**
   * Institute createMany
   */
  export type InstituteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Institutes.
     */
    data: InstituteCreateManyInput | InstituteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Institute createManyAndReturn
   */
  export type InstituteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institute
     */
    select?: InstituteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Institute
     */
    omit?: InstituteOmit<ExtArgs> | null
    /**
     * The data used to create many Institutes.
     */
    data: InstituteCreateManyInput | InstituteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Institute update
   */
  export type InstituteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institute
     */
    select?: InstituteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institute
     */
    omit?: InstituteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituteInclude<ExtArgs> | null
    /**
     * The data needed to update a Institute.
     */
    data: XOR<InstituteUpdateInput, InstituteUncheckedUpdateInput>
    /**
     * Choose, which Institute to update.
     */
    where: InstituteWhereUniqueInput
  }

  /**
   * Institute updateMany
   */
  export type InstituteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Institutes.
     */
    data: XOR<InstituteUpdateManyMutationInput, InstituteUncheckedUpdateManyInput>
    /**
     * Filter which Institutes to update
     */
    where?: InstituteWhereInput
    /**
     * Limit how many Institutes to update.
     */
    limit?: number
  }

  /**
   * Institute updateManyAndReturn
   */
  export type InstituteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institute
     */
    select?: InstituteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Institute
     */
    omit?: InstituteOmit<ExtArgs> | null
    /**
     * The data used to update Institutes.
     */
    data: XOR<InstituteUpdateManyMutationInput, InstituteUncheckedUpdateManyInput>
    /**
     * Filter which Institutes to update
     */
    where?: InstituteWhereInput
    /**
     * Limit how many Institutes to update.
     */
    limit?: number
  }

  /**
   * Institute upsert
   */
  export type InstituteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institute
     */
    select?: InstituteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institute
     */
    omit?: InstituteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituteInclude<ExtArgs> | null
    /**
     * The filter to search for the Institute to update in case it exists.
     */
    where: InstituteWhereUniqueInput
    /**
     * In case the Institute found by the `where` argument doesn't exist, create a new Institute with this data.
     */
    create: XOR<InstituteCreateInput, InstituteUncheckedCreateInput>
    /**
     * In case the Institute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstituteUpdateInput, InstituteUncheckedUpdateInput>
  }

  /**
   * Institute delete
   */
  export type InstituteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institute
     */
    select?: InstituteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institute
     */
    omit?: InstituteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituteInclude<ExtArgs> | null
    /**
     * Filter which Institute to delete.
     */
    where: InstituteWhereUniqueInput
  }

  /**
   * Institute deleteMany
   */
  export type InstituteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Institutes to delete
     */
    where?: InstituteWhereInput
    /**
     * Limit how many Institutes to delete.
     */
    limit?: number
  }

  /**
   * Institute.users
   */
  export type Institute$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Institute.departments
   */
  export type Institute$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Institute.students
   */
  export type Institute$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicProfile
     */
    select?: StudentAcademicProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicProfile
     */
    omit?: StudentAcademicProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicProfileInclude<ExtArgs> | null
    where?: StudentAcademicProfileWhereInput
    orderBy?: StudentAcademicProfileOrderByWithRelationInput | StudentAcademicProfileOrderByWithRelationInput[]
    cursor?: StudentAcademicProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentAcademicProfileScalarFieldEnum | StudentAcademicProfileScalarFieldEnum[]
  }

  /**
   * Institute without action
   */
  export type InstituteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institute
     */
    select?: InstituteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institute
     */
    omit?: InstituteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituteInclude<ExtArgs> | null
  }


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
    name: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    faceData: Bytes | null
    rfidUid: string | null
    biometricTemplate: Bytes | null
    instituteId: string | null
    departmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    faceData: Bytes | null
    rfidUid: string | null
    biometricTemplate: Bytes | null
    instituteId: string | null
    departmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    faceData: number
    rfidUid: number
    biometricTemplate: number
    instituteId: number
    departmentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    faceData?: true
    rfidUid?: true
    biometricTemplate?: true
    instituteId?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    faceData?: true
    rfidUid?: true
    biometricTemplate?: true
    instituteId?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    faceData?: true
    rfidUid?: true
    biometricTemplate?: true
    instituteId?: true
    departmentId?: true
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
    name: string
    email: string
    passwordHash: string
    role: string
    faceData: Bytes | null
    rfidUid: string | null
    biometricTemplate: Bytes | null
    instituteId: string
    departmentId: string | null
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
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    faceData?: boolean
    rfidUid?: boolean
    biometricTemplate?: boolean
    instituteId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institute?: boolean | InstituteDefaultArgs<ExtArgs>
    department?: boolean | User$departmentArgs<ExtArgs>
    hodOf?: boolean | User$hodOfArgs<ExtArgs>
    academicProfile?: boolean | User$academicProfileArgs<ExtArgs>
    subjectsTaught?: boolean | User$subjectsTaughtArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    faceData?: boolean
    rfidUid?: boolean
    biometricTemplate?: boolean
    instituteId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institute?: boolean | InstituteDefaultArgs<ExtArgs>
    department?: boolean | User$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    faceData?: boolean
    rfidUid?: boolean
    biometricTemplate?: boolean
    instituteId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institute?: boolean | InstituteDefaultArgs<ExtArgs>
    department?: boolean | User$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    faceData?: boolean
    rfidUid?: boolean
    biometricTemplate?: boolean
    instituteId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "faceData" | "rfidUid" | "biometricTemplate" | "instituteId" | "departmentId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institute?: boolean | InstituteDefaultArgs<ExtArgs>
    department?: boolean | User$departmentArgs<ExtArgs>
    hodOf?: boolean | User$hodOfArgs<ExtArgs>
    academicProfile?: boolean | User$academicProfileArgs<ExtArgs>
    subjectsTaught?: boolean | User$subjectsTaughtArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institute?: boolean | InstituteDefaultArgs<ExtArgs>
    department?: boolean | User$departmentArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institute?: boolean | InstituteDefaultArgs<ExtArgs>
    department?: boolean | User$departmentArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      institute: Prisma.$InstitutePayload<ExtArgs>
      department: Prisma.$DepartmentPayload<ExtArgs> | null
      hodOf: Prisma.$DepartmentPayload<ExtArgs> | null
      academicProfile: Prisma.$StudentAcademicProfilePayload<ExtArgs> | null
      subjectsTaught: Prisma.$FacultySubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      role: string
      faceData: Prisma.Bytes | null
      rfidUid: string | null
      biometricTemplate: Prisma.Bytes | null
      instituteId: string
      departmentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    institute<T extends InstituteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstituteDefaultArgs<ExtArgs>>): Prisma__InstituteClient<$Result.GetResult<Prisma.$InstitutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends User$departmentArgs<ExtArgs> = {}>(args?: Subset<T, User$departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    hodOf<T extends User$hodOfArgs<ExtArgs> = {}>(args?: Subset<T, User$hodOfArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    academicProfile<T extends User$academicProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$academicProfileArgs<ExtArgs>>): Prisma__StudentAcademicProfileClient<$Result.GetResult<Prisma.$StudentAcademicProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subjectsTaught<T extends User$subjectsTaughtArgs<ExtArgs> = {}>(args?: Subset<T, User$subjectsTaughtArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly faceData: FieldRef<"User", 'Bytes'>
    readonly rfidUid: FieldRef<"User", 'String'>
    readonly biometricTemplate: FieldRef<"User", 'Bytes'>
    readonly instituteId: FieldRef<"User", 'String'>
    readonly departmentId: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.department
   */
  export type User$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * User.hodOf
   */
  export type User$hodOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * User.academicProfile
   */
  export type User$academicProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicProfile
     */
    select?: StudentAcademicProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicProfile
     */
    omit?: StudentAcademicProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicProfileInclude<ExtArgs> | null
    where?: StudentAcademicProfileWhereInput
  }

  /**
   * User.subjectsTaught
   */
  export type User$subjectsTaughtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultySubject
     */
    omit?: FacultySubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    where?: FacultySubjectWhereInput
    orderBy?: FacultySubjectOrderByWithRelationInput | FacultySubjectOrderByWithRelationInput[]
    cursor?: FacultySubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultySubjectScalarFieldEnum | FacultySubjectScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    instituteId: string | null
    hodId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    instituteId: string | null
    hodId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    instituteId: number
    hodId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    instituteId?: true
    hodId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    instituteId?: true
    hodId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    instituteId?: true
    hodId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    instituteId: string
    hodId: string | null
    createdAt: Date
    updatedAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    instituteId?: boolean
    hodId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institute?: boolean | InstituteDefaultArgs<ExtArgs>
    hod?: boolean | Department$hodArgs<ExtArgs>
    members?: boolean | Department$membersArgs<ExtArgs>
    faculty?: boolean | Department$facultyArgs<ExtArgs>
    students?: boolean | Department$studentsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    instituteId?: boolean
    hodId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institute?: boolean | InstituteDefaultArgs<ExtArgs>
    hod?: boolean | Department$hodArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    instituteId?: boolean
    hodId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institute?: boolean | InstituteDefaultArgs<ExtArgs>
    hod?: boolean | Department$hodArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    instituteId?: boolean
    hodId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "instituteId" | "hodId" | "createdAt" | "updatedAt", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institute?: boolean | InstituteDefaultArgs<ExtArgs>
    hod?: boolean | Department$hodArgs<ExtArgs>
    members?: boolean | Department$membersArgs<ExtArgs>
    faculty?: boolean | Department$facultyArgs<ExtArgs>
    students?: boolean | Department$studentsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institute?: boolean | InstituteDefaultArgs<ExtArgs>
    hod?: boolean | Department$hodArgs<ExtArgs>
  }
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institute?: boolean | InstituteDefaultArgs<ExtArgs>
    hod?: boolean | Department$hodArgs<ExtArgs>
  }

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      institute: Prisma.$InstitutePayload<ExtArgs>
      hod: Prisma.$UserPayload<ExtArgs> | null
      members: Prisma.$UserPayload<ExtArgs>[]
      faculty: Prisma.$FacultySubjectPayload<ExtArgs>[]
      students: Prisma.$StudentAcademicProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      instituteId: string
      hodId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    institute<T extends InstituteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstituteDefaultArgs<ExtArgs>>): Prisma__InstituteClient<$Result.GetResult<Prisma.$InstitutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hod<T extends Department$hodArgs<ExtArgs> = {}>(args?: Subset<T, Department$hodArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    members<T extends Department$membersArgs<ExtArgs> = {}>(args?: Subset<T, Department$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    faculty<T extends Department$facultyArgs<ExtArgs> = {}>(args?: Subset<T, Department$facultyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends Department$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Department$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAcademicProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly instituteId: FieldRef<"Department", 'String'>
    readonly hodId: FieldRef<"Department", 'String'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
    readonly updatedAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.hod
   */
  export type Department$hodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Department.members
   */
  export type Department$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Department.faculty
   */
  export type Department$facultyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultySubject
     */
    omit?: FacultySubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    where?: FacultySubjectWhereInput
    orderBy?: FacultySubjectOrderByWithRelationInput | FacultySubjectOrderByWithRelationInput[]
    cursor?: FacultySubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultySubjectScalarFieldEnum | FacultySubjectScalarFieldEnum[]
  }

  /**
   * Department.students
   */
  export type Department$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicProfile
     */
    select?: StudentAcademicProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicProfile
     */
    omit?: StudentAcademicProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicProfileInclude<ExtArgs> | null
    where?: StudentAcademicProfileWhereInput
    orderBy?: StudentAcademicProfileOrderByWithRelationInput | StudentAcademicProfileOrderByWithRelationInput[]
    cursor?: StudentAcademicProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentAcademicProfileScalarFieldEnum | StudentAcademicProfileScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model StudentAcademicProfile
   */

  export type AggregateStudentAcademicProfile = {
    _count: StudentAcademicProfileCountAggregateOutputType | null
    _avg: StudentAcademicProfileAvgAggregateOutputType | null
    _sum: StudentAcademicProfileSumAggregateOutputType | null
    _min: StudentAcademicProfileMinAggregateOutputType | null
    _max: StudentAcademicProfileMaxAggregateOutputType | null
  }

  export type StudentAcademicProfileAvgAggregateOutputType = {
    year: number | null
    semester: number | null
  }

  export type StudentAcademicProfileSumAggregateOutputType = {
    year: number | null
    semester: number | null
  }

  export type StudentAcademicProfileMinAggregateOutputType = {
    id: string | null
    year: number | null
    semester: number | null
    division: string | null
    rollNo: string | null
    studentId: string | null
    instituteId: string | null
    departmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentAcademicProfileMaxAggregateOutputType = {
    id: string | null
    year: number | null
    semester: number | null
    division: string | null
    rollNo: string | null
    studentId: string | null
    instituteId: string | null
    departmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentAcademicProfileCountAggregateOutputType = {
    id: number
    year: number
    semester: number
    division: number
    rollNo: number
    studentId: number
    instituteId: number
    departmentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAcademicProfileAvgAggregateInputType = {
    year?: true
    semester?: true
  }

  export type StudentAcademicProfileSumAggregateInputType = {
    year?: true
    semester?: true
  }

  export type StudentAcademicProfileMinAggregateInputType = {
    id?: true
    year?: true
    semester?: true
    division?: true
    rollNo?: true
    studentId?: true
    instituteId?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentAcademicProfileMaxAggregateInputType = {
    id?: true
    year?: true
    semester?: true
    division?: true
    rollNo?: true
    studentId?: true
    instituteId?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentAcademicProfileCountAggregateInputType = {
    id?: true
    year?: true
    semester?: true
    division?: true
    rollNo?: true
    studentId?: true
    instituteId?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAcademicProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAcademicProfile to aggregate.
     */
    where?: StudentAcademicProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAcademicProfiles to fetch.
     */
    orderBy?: StudentAcademicProfileOrderByWithRelationInput | StudentAcademicProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentAcademicProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAcademicProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAcademicProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentAcademicProfiles
    **/
    _count?: true | StudentAcademicProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAcademicProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentAcademicProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentAcademicProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentAcademicProfileMaxAggregateInputType
  }

  export type GetStudentAcademicProfileAggregateType<T extends StudentAcademicProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentAcademicProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentAcademicProfile[P]>
      : GetScalarType<T[P], AggregateStudentAcademicProfile[P]>
  }




  export type StudentAcademicProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAcademicProfileWhereInput
    orderBy?: StudentAcademicProfileOrderByWithAggregationInput | StudentAcademicProfileOrderByWithAggregationInput[]
    by: StudentAcademicProfileScalarFieldEnum[] | StudentAcademicProfileScalarFieldEnum
    having?: StudentAcademicProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentAcademicProfileCountAggregateInputType | true
    _avg?: StudentAcademicProfileAvgAggregateInputType
    _sum?: StudentAcademicProfileSumAggregateInputType
    _min?: StudentAcademicProfileMinAggregateInputType
    _max?: StudentAcademicProfileMaxAggregateInputType
  }

  export type StudentAcademicProfileGroupByOutputType = {
    id: string
    year: number
    semester: number
    division: string
    rollNo: string | null
    studentId: string
    instituteId: string
    departmentId: string
    createdAt: Date
    updatedAt: Date
    _count: StudentAcademicProfileCountAggregateOutputType | null
    _avg: StudentAcademicProfileAvgAggregateOutputType | null
    _sum: StudentAcademicProfileSumAggregateOutputType | null
    _min: StudentAcademicProfileMinAggregateOutputType | null
    _max: StudentAcademicProfileMaxAggregateOutputType | null
  }

  type GetStudentAcademicProfileGroupByPayload<T extends StudentAcademicProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentAcademicProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentAcademicProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentAcademicProfileGroupByOutputType[P]>
            : GetScalarType<T[P], StudentAcademicProfileGroupByOutputType[P]>
        }
      >
    >


  export type StudentAcademicProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    semester?: boolean
    division?: boolean
    rollNo?: boolean
    studentId?: boolean
    instituteId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    institute?: boolean | InstituteDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentAcademicProfile"]>

  export type StudentAcademicProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    semester?: boolean
    division?: boolean
    rollNo?: boolean
    studentId?: boolean
    instituteId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    institute?: boolean | InstituteDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentAcademicProfile"]>

  export type StudentAcademicProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    semester?: boolean
    division?: boolean
    rollNo?: boolean
    studentId?: boolean
    instituteId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    institute?: boolean | InstituteDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentAcademicProfile"]>

  export type StudentAcademicProfileSelectScalar = {
    id?: boolean
    year?: boolean
    semester?: boolean
    division?: boolean
    rollNo?: boolean
    studentId?: boolean
    instituteId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentAcademicProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "semester" | "division" | "rollNo" | "studentId" | "instituteId" | "departmentId" | "createdAt" | "updatedAt", ExtArgs["result"]["studentAcademicProfile"]>
  export type StudentAcademicProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    institute?: boolean | InstituteDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type StudentAcademicProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    institute?: boolean | InstituteDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type StudentAcademicProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    institute?: boolean | InstituteDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $StudentAcademicProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentAcademicProfile"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      institute: Prisma.$InstitutePayload<ExtArgs>
      department: Prisma.$DepartmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: number
      semester: number
      division: string
      rollNo: string | null
      studentId: string
      instituteId: string
      departmentId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentAcademicProfile"]>
    composites: {}
  }

  type StudentAcademicProfileGetPayload<S extends boolean | null | undefined | StudentAcademicProfileDefaultArgs> = $Result.GetResult<Prisma.$StudentAcademicProfilePayload, S>

  type StudentAcademicProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentAcademicProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentAcademicProfileCountAggregateInputType | true
    }

  export interface StudentAcademicProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentAcademicProfile'], meta: { name: 'StudentAcademicProfile' } }
    /**
     * Find zero or one StudentAcademicProfile that matches the filter.
     * @param {StudentAcademicProfileFindUniqueArgs} args - Arguments to find a StudentAcademicProfile
     * @example
     * // Get one StudentAcademicProfile
     * const studentAcademicProfile = await prisma.studentAcademicProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentAcademicProfileFindUniqueArgs>(args: SelectSubset<T, StudentAcademicProfileFindUniqueArgs<ExtArgs>>): Prisma__StudentAcademicProfileClient<$Result.GetResult<Prisma.$StudentAcademicProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentAcademicProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentAcademicProfileFindUniqueOrThrowArgs} args - Arguments to find a StudentAcademicProfile
     * @example
     * // Get one StudentAcademicProfile
     * const studentAcademicProfile = await prisma.studentAcademicProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentAcademicProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentAcademicProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentAcademicProfileClient<$Result.GetResult<Prisma.$StudentAcademicProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAcademicProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAcademicProfileFindFirstArgs} args - Arguments to find a StudentAcademicProfile
     * @example
     * // Get one StudentAcademicProfile
     * const studentAcademicProfile = await prisma.studentAcademicProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentAcademicProfileFindFirstArgs>(args?: SelectSubset<T, StudentAcademicProfileFindFirstArgs<ExtArgs>>): Prisma__StudentAcademicProfileClient<$Result.GetResult<Prisma.$StudentAcademicProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAcademicProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAcademicProfileFindFirstOrThrowArgs} args - Arguments to find a StudentAcademicProfile
     * @example
     * // Get one StudentAcademicProfile
     * const studentAcademicProfile = await prisma.studentAcademicProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentAcademicProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentAcademicProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentAcademicProfileClient<$Result.GetResult<Prisma.$StudentAcademicProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentAcademicProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAcademicProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentAcademicProfiles
     * const studentAcademicProfiles = await prisma.studentAcademicProfile.findMany()
     * 
     * // Get first 10 StudentAcademicProfiles
     * const studentAcademicProfiles = await prisma.studentAcademicProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentAcademicProfileWithIdOnly = await prisma.studentAcademicProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentAcademicProfileFindManyArgs>(args?: SelectSubset<T, StudentAcademicProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAcademicProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentAcademicProfile.
     * @param {StudentAcademicProfileCreateArgs} args - Arguments to create a StudentAcademicProfile.
     * @example
     * // Create one StudentAcademicProfile
     * const StudentAcademicProfile = await prisma.studentAcademicProfile.create({
     *   data: {
     *     // ... data to create a StudentAcademicProfile
     *   }
     * })
     * 
     */
    create<T extends StudentAcademicProfileCreateArgs>(args: SelectSubset<T, StudentAcademicProfileCreateArgs<ExtArgs>>): Prisma__StudentAcademicProfileClient<$Result.GetResult<Prisma.$StudentAcademicProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentAcademicProfiles.
     * @param {StudentAcademicProfileCreateManyArgs} args - Arguments to create many StudentAcademicProfiles.
     * @example
     * // Create many StudentAcademicProfiles
     * const studentAcademicProfile = await prisma.studentAcademicProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentAcademicProfileCreateManyArgs>(args?: SelectSubset<T, StudentAcademicProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentAcademicProfiles and returns the data saved in the database.
     * @param {StudentAcademicProfileCreateManyAndReturnArgs} args - Arguments to create many StudentAcademicProfiles.
     * @example
     * // Create many StudentAcademicProfiles
     * const studentAcademicProfile = await prisma.studentAcademicProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentAcademicProfiles and only return the `id`
     * const studentAcademicProfileWithIdOnly = await prisma.studentAcademicProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentAcademicProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentAcademicProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAcademicProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentAcademicProfile.
     * @param {StudentAcademicProfileDeleteArgs} args - Arguments to delete one StudentAcademicProfile.
     * @example
     * // Delete one StudentAcademicProfile
     * const StudentAcademicProfile = await prisma.studentAcademicProfile.delete({
     *   where: {
     *     // ... filter to delete one StudentAcademicProfile
     *   }
     * })
     * 
     */
    delete<T extends StudentAcademicProfileDeleteArgs>(args: SelectSubset<T, StudentAcademicProfileDeleteArgs<ExtArgs>>): Prisma__StudentAcademicProfileClient<$Result.GetResult<Prisma.$StudentAcademicProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentAcademicProfile.
     * @param {StudentAcademicProfileUpdateArgs} args - Arguments to update one StudentAcademicProfile.
     * @example
     * // Update one StudentAcademicProfile
     * const studentAcademicProfile = await prisma.studentAcademicProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentAcademicProfileUpdateArgs>(args: SelectSubset<T, StudentAcademicProfileUpdateArgs<ExtArgs>>): Prisma__StudentAcademicProfileClient<$Result.GetResult<Prisma.$StudentAcademicProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentAcademicProfiles.
     * @param {StudentAcademicProfileDeleteManyArgs} args - Arguments to filter StudentAcademicProfiles to delete.
     * @example
     * // Delete a few StudentAcademicProfiles
     * const { count } = await prisma.studentAcademicProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentAcademicProfileDeleteManyArgs>(args?: SelectSubset<T, StudentAcademicProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentAcademicProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAcademicProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentAcademicProfiles
     * const studentAcademicProfile = await prisma.studentAcademicProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentAcademicProfileUpdateManyArgs>(args: SelectSubset<T, StudentAcademicProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentAcademicProfiles and returns the data updated in the database.
     * @param {StudentAcademicProfileUpdateManyAndReturnArgs} args - Arguments to update many StudentAcademicProfiles.
     * @example
     * // Update many StudentAcademicProfiles
     * const studentAcademicProfile = await prisma.studentAcademicProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentAcademicProfiles and only return the `id`
     * const studentAcademicProfileWithIdOnly = await prisma.studentAcademicProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentAcademicProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentAcademicProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAcademicProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentAcademicProfile.
     * @param {StudentAcademicProfileUpsertArgs} args - Arguments to update or create a StudentAcademicProfile.
     * @example
     * // Update or create a StudentAcademicProfile
     * const studentAcademicProfile = await prisma.studentAcademicProfile.upsert({
     *   create: {
     *     // ... data to create a StudentAcademicProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentAcademicProfile we want to update
     *   }
     * })
     */
    upsert<T extends StudentAcademicProfileUpsertArgs>(args: SelectSubset<T, StudentAcademicProfileUpsertArgs<ExtArgs>>): Prisma__StudentAcademicProfileClient<$Result.GetResult<Prisma.$StudentAcademicProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentAcademicProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAcademicProfileCountArgs} args - Arguments to filter StudentAcademicProfiles to count.
     * @example
     * // Count the number of StudentAcademicProfiles
     * const count = await prisma.studentAcademicProfile.count({
     *   where: {
     *     // ... the filter for the StudentAcademicProfiles we want to count
     *   }
     * })
    **/
    count<T extends StudentAcademicProfileCountArgs>(
      args?: Subset<T, StudentAcademicProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentAcademicProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentAcademicProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAcademicProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAcademicProfileAggregateArgs>(args: Subset<T, StudentAcademicProfileAggregateArgs>): Prisma.PrismaPromise<GetStudentAcademicProfileAggregateType<T>>

    /**
     * Group by StudentAcademicProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAcademicProfileGroupByArgs} args - Group by arguments.
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
      T extends StudentAcademicProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentAcademicProfileGroupByArgs['orderBy'] }
        : { orderBy?: StudentAcademicProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentAcademicProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentAcademicProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentAcademicProfile model
   */
  readonly fields: StudentAcademicProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentAcademicProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentAcademicProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    institute<T extends InstituteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstituteDefaultArgs<ExtArgs>>): Prisma__InstituteClient<$Result.GetResult<Prisma.$InstitutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentAcademicProfile model
   */
  interface StudentAcademicProfileFieldRefs {
    readonly id: FieldRef<"StudentAcademicProfile", 'String'>
    readonly year: FieldRef<"StudentAcademicProfile", 'Int'>
    readonly semester: FieldRef<"StudentAcademicProfile", 'Int'>
    readonly division: FieldRef<"StudentAcademicProfile", 'String'>
    readonly rollNo: FieldRef<"StudentAcademicProfile", 'String'>
    readonly studentId: FieldRef<"StudentAcademicProfile", 'String'>
    readonly instituteId: FieldRef<"StudentAcademicProfile", 'String'>
    readonly departmentId: FieldRef<"StudentAcademicProfile", 'String'>
    readonly createdAt: FieldRef<"StudentAcademicProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentAcademicProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentAcademicProfile findUnique
   */
  export type StudentAcademicProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicProfile
     */
    select?: StudentAcademicProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicProfile
     */
    omit?: StudentAcademicProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentAcademicProfile to fetch.
     */
    where: StudentAcademicProfileWhereUniqueInput
  }

  /**
   * StudentAcademicProfile findUniqueOrThrow
   */
  export type StudentAcademicProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicProfile
     */
    select?: StudentAcademicProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicProfile
     */
    omit?: StudentAcademicProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentAcademicProfile to fetch.
     */
    where: StudentAcademicProfileWhereUniqueInput
  }

  /**
   * StudentAcademicProfile findFirst
   */
  export type StudentAcademicProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicProfile
     */
    select?: StudentAcademicProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicProfile
     */
    omit?: StudentAcademicProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentAcademicProfile to fetch.
     */
    where?: StudentAcademicProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAcademicProfiles to fetch.
     */
    orderBy?: StudentAcademicProfileOrderByWithRelationInput | StudentAcademicProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAcademicProfiles.
     */
    cursor?: StudentAcademicProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAcademicProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAcademicProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAcademicProfiles.
     */
    distinct?: StudentAcademicProfileScalarFieldEnum | StudentAcademicProfileScalarFieldEnum[]
  }

  /**
   * StudentAcademicProfile findFirstOrThrow
   */
  export type StudentAcademicProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicProfile
     */
    select?: StudentAcademicProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicProfile
     */
    omit?: StudentAcademicProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentAcademicProfile to fetch.
     */
    where?: StudentAcademicProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAcademicProfiles to fetch.
     */
    orderBy?: StudentAcademicProfileOrderByWithRelationInput | StudentAcademicProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAcademicProfiles.
     */
    cursor?: StudentAcademicProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAcademicProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAcademicProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAcademicProfiles.
     */
    distinct?: StudentAcademicProfileScalarFieldEnum | StudentAcademicProfileScalarFieldEnum[]
  }

  /**
   * StudentAcademicProfile findMany
   */
  export type StudentAcademicProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicProfile
     */
    select?: StudentAcademicProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicProfile
     */
    omit?: StudentAcademicProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentAcademicProfiles to fetch.
     */
    where?: StudentAcademicProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAcademicProfiles to fetch.
     */
    orderBy?: StudentAcademicProfileOrderByWithRelationInput | StudentAcademicProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentAcademicProfiles.
     */
    cursor?: StudentAcademicProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAcademicProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAcademicProfiles.
     */
    skip?: number
    distinct?: StudentAcademicProfileScalarFieldEnum | StudentAcademicProfileScalarFieldEnum[]
  }

  /**
   * StudentAcademicProfile create
   */
  export type StudentAcademicProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicProfile
     */
    select?: StudentAcademicProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicProfile
     */
    omit?: StudentAcademicProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentAcademicProfile.
     */
    data: XOR<StudentAcademicProfileCreateInput, StudentAcademicProfileUncheckedCreateInput>
  }

  /**
   * StudentAcademicProfile createMany
   */
  export type StudentAcademicProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentAcademicProfiles.
     */
    data: StudentAcademicProfileCreateManyInput | StudentAcademicProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentAcademicProfile createManyAndReturn
   */
  export type StudentAcademicProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicProfile
     */
    select?: StudentAcademicProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicProfile
     */
    omit?: StudentAcademicProfileOmit<ExtArgs> | null
    /**
     * The data used to create many StudentAcademicProfiles.
     */
    data: StudentAcademicProfileCreateManyInput | StudentAcademicProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentAcademicProfile update
   */
  export type StudentAcademicProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicProfile
     */
    select?: StudentAcademicProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicProfile
     */
    omit?: StudentAcademicProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentAcademicProfile.
     */
    data: XOR<StudentAcademicProfileUpdateInput, StudentAcademicProfileUncheckedUpdateInput>
    /**
     * Choose, which StudentAcademicProfile to update.
     */
    where: StudentAcademicProfileWhereUniqueInput
  }

  /**
   * StudentAcademicProfile updateMany
   */
  export type StudentAcademicProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentAcademicProfiles.
     */
    data: XOR<StudentAcademicProfileUpdateManyMutationInput, StudentAcademicProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentAcademicProfiles to update
     */
    where?: StudentAcademicProfileWhereInput
    /**
     * Limit how many StudentAcademicProfiles to update.
     */
    limit?: number
  }

  /**
   * StudentAcademicProfile updateManyAndReturn
   */
  export type StudentAcademicProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicProfile
     */
    select?: StudentAcademicProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicProfile
     */
    omit?: StudentAcademicProfileOmit<ExtArgs> | null
    /**
     * The data used to update StudentAcademicProfiles.
     */
    data: XOR<StudentAcademicProfileUpdateManyMutationInput, StudentAcademicProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentAcademicProfiles to update
     */
    where?: StudentAcademicProfileWhereInput
    /**
     * Limit how many StudentAcademicProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentAcademicProfile upsert
   */
  export type StudentAcademicProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicProfile
     */
    select?: StudentAcademicProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicProfile
     */
    omit?: StudentAcademicProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentAcademicProfile to update in case it exists.
     */
    where: StudentAcademicProfileWhereUniqueInput
    /**
     * In case the StudentAcademicProfile found by the `where` argument doesn't exist, create a new StudentAcademicProfile with this data.
     */
    create: XOR<StudentAcademicProfileCreateInput, StudentAcademicProfileUncheckedCreateInput>
    /**
     * In case the StudentAcademicProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentAcademicProfileUpdateInput, StudentAcademicProfileUncheckedUpdateInput>
  }

  /**
   * StudentAcademicProfile delete
   */
  export type StudentAcademicProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicProfile
     */
    select?: StudentAcademicProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicProfile
     */
    omit?: StudentAcademicProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicProfileInclude<ExtArgs> | null
    /**
     * Filter which StudentAcademicProfile to delete.
     */
    where: StudentAcademicProfileWhereUniqueInput
  }

  /**
   * StudentAcademicProfile deleteMany
   */
  export type StudentAcademicProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAcademicProfiles to delete
     */
    where?: StudentAcademicProfileWhereInput
    /**
     * Limit how many StudentAcademicProfiles to delete.
     */
    limit?: number
  }

  /**
   * StudentAcademicProfile without action
   */
  export type StudentAcademicProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAcademicProfile
     */
    select?: StudentAcademicProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAcademicProfile
     */
    omit?: StudentAcademicProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAcademicProfileInclude<ExtArgs> | null
  }


  /**
   * Model FacultySubject
   */

  export type AggregateFacultySubject = {
    _count: FacultySubjectCountAggregateOutputType | null
    _min: FacultySubjectMinAggregateOutputType | null
    _max: FacultySubjectMaxAggregateOutputType | null
  }

  export type FacultySubjectMinAggregateOutputType = {
    id: string | null
    subject: string | null
    facultyId: string | null
    departmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacultySubjectMaxAggregateOutputType = {
    id: string | null
    subject: string | null
    facultyId: string | null
    departmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacultySubjectCountAggregateOutputType = {
    id: number
    subject: number
    facultyId: number
    departmentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FacultySubjectMinAggregateInputType = {
    id?: true
    subject?: true
    facultyId?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacultySubjectMaxAggregateInputType = {
    id?: true
    subject?: true
    facultyId?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacultySubjectCountAggregateInputType = {
    id?: true
    subject?: true
    facultyId?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FacultySubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultySubject to aggregate.
     */
    where?: FacultySubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultySubjects to fetch.
     */
    orderBy?: FacultySubjectOrderByWithRelationInput | FacultySubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacultySubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultySubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultySubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacultySubjects
    **/
    _count?: true | FacultySubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultySubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultySubjectMaxAggregateInputType
  }

  export type GetFacultySubjectAggregateType<T extends FacultySubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateFacultySubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacultySubject[P]>
      : GetScalarType<T[P], AggregateFacultySubject[P]>
  }




  export type FacultySubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultySubjectWhereInput
    orderBy?: FacultySubjectOrderByWithAggregationInput | FacultySubjectOrderByWithAggregationInput[]
    by: FacultySubjectScalarFieldEnum[] | FacultySubjectScalarFieldEnum
    having?: FacultySubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultySubjectCountAggregateInputType | true
    _min?: FacultySubjectMinAggregateInputType
    _max?: FacultySubjectMaxAggregateInputType
  }

  export type FacultySubjectGroupByOutputType = {
    id: string
    subject: string
    facultyId: string
    departmentId: string
    createdAt: Date
    updatedAt: Date
    _count: FacultySubjectCountAggregateOutputType | null
    _min: FacultySubjectMinAggregateOutputType | null
    _max: FacultySubjectMaxAggregateOutputType | null
  }

  type GetFacultySubjectGroupByPayload<T extends FacultySubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultySubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultySubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultySubjectGroupByOutputType[P]>
            : GetScalarType<T[P], FacultySubjectGroupByOutputType[P]>
        }
      >
    >


  export type FacultySubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    facultyId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    faculty?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultySubject"]>

  export type FacultySubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    facultyId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    faculty?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultySubject"]>

  export type FacultySubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    facultyId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    faculty?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultySubject"]>

  export type FacultySubjectSelectScalar = {
    id?: boolean
    subject?: boolean
    facultyId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FacultySubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subject" | "facultyId" | "departmentId" | "createdAt" | "updatedAt", ExtArgs["result"]["facultySubject"]>
  export type FacultySubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type FacultySubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type FacultySubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | UserDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $FacultySubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacultySubject"
    objects: {
      faculty: Prisma.$UserPayload<ExtArgs>
      department: Prisma.$DepartmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subject: string
      facultyId: string
      departmentId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["facultySubject"]>
    composites: {}
  }

  type FacultySubjectGetPayload<S extends boolean | null | undefined | FacultySubjectDefaultArgs> = $Result.GetResult<Prisma.$FacultySubjectPayload, S>

  type FacultySubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacultySubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacultySubjectCountAggregateInputType | true
    }

  export interface FacultySubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacultySubject'], meta: { name: 'FacultySubject' } }
    /**
     * Find zero or one FacultySubject that matches the filter.
     * @param {FacultySubjectFindUniqueArgs} args - Arguments to find a FacultySubject
     * @example
     * // Get one FacultySubject
     * const facultySubject = await prisma.facultySubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacultySubjectFindUniqueArgs>(args: SelectSubset<T, FacultySubjectFindUniqueArgs<ExtArgs>>): Prisma__FacultySubjectClient<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacultySubject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacultySubjectFindUniqueOrThrowArgs} args - Arguments to find a FacultySubject
     * @example
     * // Get one FacultySubject
     * const facultySubject = await prisma.facultySubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacultySubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, FacultySubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacultySubjectClient<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacultySubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultySubjectFindFirstArgs} args - Arguments to find a FacultySubject
     * @example
     * // Get one FacultySubject
     * const facultySubject = await prisma.facultySubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacultySubjectFindFirstArgs>(args?: SelectSubset<T, FacultySubjectFindFirstArgs<ExtArgs>>): Prisma__FacultySubjectClient<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacultySubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultySubjectFindFirstOrThrowArgs} args - Arguments to find a FacultySubject
     * @example
     * // Get one FacultySubject
     * const facultySubject = await prisma.facultySubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacultySubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, FacultySubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacultySubjectClient<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacultySubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultySubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacultySubjects
     * const facultySubjects = await prisma.facultySubject.findMany()
     * 
     * // Get first 10 FacultySubjects
     * const facultySubjects = await prisma.facultySubject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facultySubjectWithIdOnly = await prisma.facultySubject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacultySubjectFindManyArgs>(args?: SelectSubset<T, FacultySubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacultySubject.
     * @param {FacultySubjectCreateArgs} args - Arguments to create a FacultySubject.
     * @example
     * // Create one FacultySubject
     * const FacultySubject = await prisma.facultySubject.create({
     *   data: {
     *     // ... data to create a FacultySubject
     *   }
     * })
     * 
     */
    create<T extends FacultySubjectCreateArgs>(args: SelectSubset<T, FacultySubjectCreateArgs<ExtArgs>>): Prisma__FacultySubjectClient<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacultySubjects.
     * @param {FacultySubjectCreateManyArgs} args - Arguments to create many FacultySubjects.
     * @example
     * // Create many FacultySubjects
     * const facultySubject = await prisma.facultySubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacultySubjectCreateManyArgs>(args?: SelectSubset<T, FacultySubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacultySubjects and returns the data saved in the database.
     * @param {FacultySubjectCreateManyAndReturnArgs} args - Arguments to create many FacultySubjects.
     * @example
     * // Create many FacultySubjects
     * const facultySubject = await prisma.facultySubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacultySubjects and only return the `id`
     * const facultySubjectWithIdOnly = await prisma.facultySubject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacultySubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, FacultySubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacultySubject.
     * @param {FacultySubjectDeleteArgs} args - Arguments to delete one FacultySubject.
     * @example
     * // Delete one FacultySubject
     * const FacultySubject = await prisma.facultySubject.delete({
     *   where: {
     *     // ... filter to delete one FacultySubject
     *   }
     * })
     * 
     */
    delete<T extends FacultySubjectDeleteArgs>(args: SelectSubset<T, FacultySubjectDeleteArgs<ExtArgs>>): Prisma__FacultySubjectClient<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacultySubject.
     * @param {FacultySubjectUpdateArgs} args - Arguments to update one FacultySubject.
     * @example
     * // Update one FacultySubject
     * const facultySubject = await prisma.facultySubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacultySubjectUpdateArgs>(args: SelectSubset<T, FacultySubjectUpdateArgs<ExtArgs>>): Prisma__FacultySubjectClient<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacultySubjects.
     * @param {FacultySubjectDeleteManyArgs} args - Arguments to filter FacultySubjects to delete.
     * @example
     * // Delete a few FacultySubjects
     * const { count } = await prisma.facultySubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacultySubjectDeleteManyArgs>(args?: SelectSubset<T, FacultySubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacultySubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultySubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacultySubjects
     * const facultySubject = await prisma.facultySubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacultySubjectUpdateManyArgs>(args: SelectSubset<T, FacultySubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacultySubjects and returns the data updated in the database.
     * @param {FacultySubjectUpdateManyAndReturnArgs} args - Arguments to update many FacultySubjects.
     * @example
     * // Update many FacultySubjects
     * const facultySubject = await prisma.facultySubject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacultySubjects and only return the `id`
     * const facultySubjectWithIdOnly = await prisma.facultySubject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacultySubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, FacultySubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacultySubject.
     * @param {FacultySubjectUpsertArgs} args - Arguments to update or create a FacultySubject.
     * @example
     * // Update or create a FacultySubject
     * const facultySubject = await prisma.facultySubject.upsert({
     *   create: {
     *     // ... data to create a FacultySubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacultySubject we want to update
     *   }
     * })
     */
    upsert<T extends FacultySubjectUpsertArgs>(args: SelectSubset<T, FacultySubjectUpsertArgs<ExtArgs>>): Prisma__FacultySubjectClient<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacultySubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultySubjectCountArgs} args - Arguments to filter FacultySubjects to count.
     * @example
     * // Count the number of FacultySubjects
     * const count = await prisma.facultySubject.count({
     *   where: {
     *     // ... the filter for the FacultySubjects we want to count
     *   }
     * })
    **/
    count<T extends FacultySubjectCountArgs>(
      args?: Subset<T, FacultySubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultySubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacultySubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultySubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacultySubjectAggregateArgs>(args: Subset<T, FacultySubjectAggregateArgs>): Prisma.PrismaPromise<GetFacultySubjectAggregateType<T>>

    /**
     * Group by FacultySubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultySubjectGroupByArgs} args - Group by arguments.
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
      T extends FacultySubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultySubjectGroupByArgs['orderBy'] }
        : { orderBy?: FacultySubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacultySubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultySubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacultySubject model
   */
  readonly fields: FacultySubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacultySubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacultySubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faculty<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FacultySubject model
   */
  interface FacultySubjectFieldRefs {
    readonly id: FieldRef<"FacultySubject", 'String'>
    readonly subject: FieldRef<"FacultySubject", 'String'>
    readonly facultyId: FieldRef<"FacultySubject", 'String'>
    readonly departmentId: FieldRef<"FacultySubject", 'String'>
    readonly createdAt: FieldRef<"FacultySubject", 'DateTime'>
    readonly updatedAt: FieldRef<"FacultySubject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FacultySubject findUnique
   */
  export type FacultySubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultySubject
     */
    omit?: FacultySubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    /**
     * Filter, which FacultySubject to fetch.
     */
    where: FacultySubjectWhereUniqueInput
  }

  /**
   * FacultySubject findUniqueOrThrow
   */
  export type FacultySubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultySubject
     */
    omit?: FacultySubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    /**
     * Filter, which FacultySubject to fetch.
     */
    where: FacultySubjectWhereUniqueInput
  }

  /**
   * FacultySubject findFirst
   */
  export type FacultySubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultySubject
     */
    omit?: FacultySubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    /**
     * Filter, which FacultySubject to fetch.
     */
    where?: FacultySubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultySubjects to fetch.
     */
    orderBy?: FacultySubjectOrderByWithRelationInput | FacultySubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultySubjects.
     */
    cursor?: FacultySubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultySubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultySubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultySubjects.
     */
    distinct?: FacultySubjectScalarFieldEnum | FacultySubjectScalarFieldEnum[]
  }

  /**
   * FacultySubject findFirstOrThrow
   */
  export type FacultySubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultySubject
     */
    omit?: FacultySubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    /**
     * Filter, which FacultySubject to fetch.
     */
    where?: FacultySubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultySubjects to fetch.
     */
    orderBy?: FacultySubjectOrderByWithRelationInput | FacultySubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultySubjects.
     */
    cursor?: FacultySubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultySubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultySubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultySubjects.
     */
    distinct?: FacultySubjectScalarFieldEnum | FacultySubjectScalarFieldEnum[]
  }

  /**
   * FacultySubject findMany
   */
  export type FacultySubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultySubject
     */
    omit?: FacultySubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    /**
     * Filter, which FacultySubjects to fetch.
     */
    where?: FacultySubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultySubjects to fetch.
     */
    orderBy?: FacultySubjectOrderByWithRelationInput | FacultySubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacultySubjects.
     */
    cursor?: FacultySubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultySubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultySubjects.
     */
    skip?: number
    distinct?: FacultySubjectScalarFieldEnum | FacultySubjectScalarFieldEnum[]
  }

  /**
   * FacultySubject create
   */
  export type FacultySubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultySubject
     */
    omit?: FacultySubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a FacultySubject.
     */
    data: XOR<FacultySubjectCreateInput, FacultySubjectUncheckedCreateInput>
  }

  /**
   * FacultySubject createMany
   */
  export type FacultySubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacultySubjects.
     */
    data: FacultySubjectCreateManyInput | FacultySubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacultySubject createManyAndReturn
   */
  export type FacultySubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacultySubject
     */
    omit?: FacultySubjectOmit<ExtArgs> | null
    /**
     * The data used to create many FacultySubjects.
     */
    data: FacultySubjectCreateManyInput | FacultySubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacultySubject update
   */
  export type FacultySubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultySubject
     */
    omit?: FacultySubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a FacultySubject.
     */
    data: XOR<FacultySubjectUpdateInput, FacultySubjectUncheckedUpdateInput>
    /**
     * Choose, which FacultySubject to update.
     */
    where: FacultySubjectWhereUniqueInput
  }

  /**
   * FacultySubject updateMany
   */
  export type FacultySubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacultySubjects.
     */
    data: XOR<FacultySubjectUpdateManyMutationInput, FacultySubjectUncheckedUpdateManyInput>
    /**
     * Filter which FacultySubjects to update
     */
    where?: FacultySubjectWhereInput
    /**
     * Limit how many FacultySubjects to update.
     */
    limit?: number
  }

  /**
   * FacultySubject updateManyAndReturn
   */
  export type FacultySubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacultySubject
     */
    omit?: FacultySubjectOmit<ExtArgs> | null
    /**
     * The data used to update FacultySubjects.
     */
    data: XOR<FacultySubjectUpdateManyMutationInput, FacultySubjectUncheckedUpdateManyInput>
    /**
     * Filter which FacultySubjects to update
     */
    where?: FacultySubjectWhereInput
    /**
     * Limit how many FacultySubjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacultySubject upsert
   */
  export type FacultySubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultySubject
     */
    omit?: FacultySubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the FacultySubject to update in case it exists.
     */
    where: FacultySubjectWhereUniqueInput
    /**
     * In case the FacultySubject found by the `where` argument doesn't exist, create a new FacultySubject with this data.
     */
    create: XOR<FacultySubjectCreateInput, FacultySubjectUncheckedCreateInput>
    /**
     * In case the FacultySubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacultySubjectUpdateInput, FacultySubjectUncheckedUpdateInput>
  }

  /**
   * FacultySubject delete
   */
  export type FacultySubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultySubject
     */
    omit?: FacultySubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    /**
     * Filter which FacultySubject to delete.
     */
    where: FacultySubjectWhereUniqueInput
  }

  /**
   * FacultySubject deleteMany
   */
  export type FacultySubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultySubjects to delete
     */
    where?: FacultySubjectWhereInput
    /**
     * Limit how many FacultySubjects to delete.
     */
    limit?: number
  }

  /**
   * FacultySubject without action
   */
  export type FacultySubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultySubject
     */
    omit?: FacultySubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
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


  export const InstituteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InstituteScalarFieldEnum = (typeof InstituteScalarFieldEnum)[keyof typeof InstituteScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    faceData: 'faceData',
    rfidUid: 'rfidUid',
    biometricTemplate: 'biometricTemplate',
    instituteId: 'instituteId',
    departmentId: 'departmentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    instituteId: 'instituteId',
    hodId: 'hodId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const StudentAcademicProfileScalarFieldEnum: {
    id: 'id',
    year: 'year',
    semester: 'semester',
    division: 'division',
    rollNo: 'rollNo',
    studentId: 'studentId',
    instituteId: 'instituteId',
    departmentId: 'departmentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentAcademicProfileScalarFieldEnum = (typeof StudentAcademicProfileScalarFieldEnum)[keyof typeof StudentAcademicProfileScalarFieldEnum]


  export const FacultySubjectScalarFieldEnum: {
    id: 'id',
    subject: 'subject',
    facultyId: 'facultyId',
    departmentId: 'departmentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FacultySubjectScalarFieldEnum = (typeof FacultySubjectScalarFieldEnum)[keyof typeof FacultySubjectScalarFieldEnum]


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
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type InstituteWhereInput = {
    AND?: InstituteWhereInput | InstituteWhereInput[]
    OR?: InstituteWhereInput[]
    NOT?: InstituteWhereInput | InstituteWhereInput[]
    id?: StringFilter<"Institute"> | string
    name?: StringFilter<"Institute"> | string
    code?: StringFilter<"Institute"> | string
    status?: StringFilter<"Institute"> | string
    createdAt?: DateTimeFilter<"Institute"> | Date | string
    updatedAt?: DateTimeFilter<"Institute"> | Date | string
    users?: UserListRelationFilter
    departments?: DepartmentListRelationFilter
    students?: StudentAcademicProfileListRelationFilter
  }

  export type InstituteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    departments?: DepartmentOrderByRelationAggregateInput
    students?: StudentAcademicProfileOrderByRelationAggregateInput
  }

  export type InstituteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: InstituteWhereInput | InstituteWhereInput[]
    OR?: InstituteWhereInput[]
    NOT?: InstituteWhereInput | InstituteWhereInput[]
    name?: StringFilter<"Institute"> | string
    status?: StringFilter<"Institute"> | string
    createdAt?: DateTimeFilter<"Institute"> | Date | string
    updatedAt?: DateTimeFilter<"Institute"> | Date | string
    users?: UserListRelationFilter
    departments?: DepartmentListRelationFilter
    students?: StudentAcademicProfileListRelationFilter
  }, "id" | "code">

  export type InstituteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InstituteCountOrderByAggregateInput
    _max?: InstituteMaxOrderByAggregateInput
    _min?: InstituteMinOrderByAggregateInput
  }

  export type InstituteScalarWhereWithAggregatesInput = {
    AND?: InstituteScalarWhereWithAggregatesInput | InstituteScalarWhereWithAggregatesInput[]
    OR?: InstituteScalarWhereWithAggregatesInput[]
    NOT?: InstituteScalarWhereWithAggregatesInput | InstituteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Institute"> | string
    name?: StringWithAggregatesFilter<"Institute"> | string
    code?: StringWithAggregatesFilter<"Institute"> | string
    status?: StringWithAggregatesFilter<"Institute"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Institute"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Institute"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    faceData?: BytesNullableFilter<"User"> | Bytes | null
    rfidUid?: StringNullableFilter<"User"> | string | null
    biometricTemplate?: BytesNullableFilter<"User"> | Bytes | null
    instituteId?: StringFilter<"User"> | string
    departmentId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    institute?: XOR<InstituteScalarRelationFilter, InstituteWhereInput>
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    hodOf?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    academicProfile?: XOR<StudentAcademicProfileNullableScalarRelationFilter, StudentAcademicProfileWhereInput> | null
    subjectsTaught?: FacultySubjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    faceData?: SortOrderInput | SortOrder
    rfidUid?: SortOrderInput | SortOrder
    biometricTemplate?: SortOrderInput | SortOrder
    instituteId?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    institute?: InstituteOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
    hodOf?: DepartmentOrderByWithRelationInput
    academicProfile?: StudentAcademicProfileOrderByWithRelationInput
    subjectsTaught?: FacultySubjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email_instituteId?: UserEmailInstituteIdCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    faceData?: BytesNullableFilter<"User"> | Bytes | null
    rfidUid?: StringNullableFilter<"User"> | string | null
    biometricTemplate?: BytesNullableFilter<"User"> | Bytes | null
    instituteId?: StringFilter<"User"> | string
    departmentId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    institute?: XOR<InstituteScalarRelationFilter, InstituteWhereInput>
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    hodOf?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    academicProfile?: XOR<StudentAcademicProfileNullableScalarRelationFilter, StudentAcademicProfileWhereInput> | null
    subjectsTaught?: FacultySubjectListRelationFilter
  }, "id" | "email_instituteId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    faceData?: SortOrderInput | SortOrder
    rfidUid?: SortOrderInput | SortOrder
    biometricTemplate?: SortOrderInput | SortOrder
    instituteId?: SortOrder
    departmentId?: SortOrderInput | SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    faceData?: BytesNullableWithAggregatesFilter<"User"> | Bytes | null
    rfidUid?: StringNullableWithAggregatesFilter<"User"> | string | null
    biometricTemplate?: BytesNullableWithAggregatesFilter<"User"> | Bytes | null
    instituteId?: StringWithAggregatesFilter<"User"> | string
    departmentId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    instituteId?: StringFilter<"Department"> | string
    hodId?: StringNullableFilter<"Department"> | string | null
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    institute?: XOR<InstituteScalarRelationFilter, InstituteWhereInput>
    hod?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    members?: UserListRelationFilter
    faculty?: FacultySubjectListRelationFilter
    students?: StudentAcademicProfileListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    instituteId?: SortOrder
    hodId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    institute?: InstituteOrderByWithRelationInput
    hod?: UserOrderByWithRelationInput
    members?: UserOrderByRelationAggregateInput
    faculty?: FacultySubjectOrderByRelationAggregateInput
    students?: StudentAcademicProfileOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    hodId?: string
    name_instituteId?: DepartmentNameInstituteIdCompoundUniqueInput
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    name?: StringFilter<"Department"> | string
    instituteId?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    institute?: XOR<InstituteScalarRelationFilter, InstituteWhereInput>
    hod?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    members?: UserListRelationFilter
    faculty?: FacultySubjectListRelationFilter
    students?: StudentAcademicProfileListRelationFilter
  }, "id" | "hodId" | "name_instituteId">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    instituteId?: SortOrder
    hodId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    instituteId?: StringWithAggregatesFilter<"Department"> | string
    hodId?: StringNullableWithAggregatesFilter<"Department"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type StudentAcademicProfileWhereInput = {
    AND?: StudentAcademicProfileWhereInput | StudentAcademicProfileWhereInput[]
    OR?: StudentAcademicProfileWhereInput[]
    NOT?: StudentAcademicProfileWhereInput | StudentAcademicProfileWhereInput[]
    id?: StringFilter<"StudentAcademicProfile"> | string
    year?: IntFilter<"StudentAcademicProfile"> | number
    semester?: IntFilter<"StudentAcademicProfile"> | number
    division?: StringFilter<"StudentAcademicProfile"> | string
    rollNo?: StringNullableFilter<"StudentAcademicProfile"> | string | null
    studentId?: StringFilter<"StudentAcademicProfile"> | string
    instituteId?: StringFilter<"StudentAcademicProfile"> | string
    departmentId?: StringFilter<"StudentAcademicProfile"> | string
    createdAt?: DateTimeFilter<"StudentAcademicProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StudentAcademicProfile"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    institute?: XOR<InstituteScalarRelationFilter, InstituteWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }

  export type StudentAcademicProfileOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    division?: SortOrder
    rollNo?: SortOrderInput | SortOrder
    studentId?: SortOrder
    instituteId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: UserOrderByWithRelationInput
    institute?: InstituteOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
  }

  export type StudentAcademicProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId?: string
    AND?: StudentAcademicProfileWhereInput | StudentAcademicProfileWhereInput[]
    OR?: StudentAcademicProfileWhereInput[]
    NOT?: StudentAcademicProfileWhereInput | StudentAcademicProfileWhereInput[]
    year?: IntFilter<"StudentAcademicProfile"> | number
    semester?: IntFilter<"StudentAcademicProfile"> | number
    division?: StringFilter<"StudentAcademicProfile"> | string
    rollNo?: StringNullableFilter<"StudentAcademicProfile"> | string | null
    instituteId?: StringFilter<"StudentAcademicProfile"> | string
    departmentId?: StringFilter<"StudentAcademicProfile"> | string
    createdAt?: DateTimeFilter<"StudentAcademicProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StudentAcademicProfile"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    institute?: XOR<InstituteScalarRelationFilter, InstituteWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }, "id" | "studentId">

  export type StudentAcademicProfileOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    division?: SortOrder
    rollNo?: SortOrderInput | SortOrder
    studentId?: SortOrder
    instituteId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentAcademicProfileCountOrderByAggregateInput
    _avg?: StudentAcademicProfileAvgOrderByAggregateInput
    _max?: StudentAcademicProfileMaxOrderByAggregateInput
    _min?: StudentAcademicProfileMinOrderByAggregateInput
    _sum?: StudentAcademicProfileSumOrderByAggregateInput
  }

  export type StudentAcademicProfileScalarWhereWithAggregatesInput = {
    AND?: StudentAcademicProfileScalarWhereWithAggregatesInput | StudentAcademicProfileScalarWhereWithAggregatesInput[]
    OR?: StudentAcademicProfileScalarWhereWithAggregatesInput[]
    NOT?: StudentAcademicProfileScalarWhereWithAggregatesInput | StudentAcademicProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentAcademicProfile"> | string
    year?: IntWithAggregatesFilter<"StudentAcademicProfile"> | number
    semester?: IntWithAggregatesFilter<"StudentAcademicProfile"> | number
    division?: StringWithAggregatesFilter<"StudentAcademicProfile"> | string
    rollNo?: StringNullableWithAggregatesFilter<"StudentAcademicProfile"> | string | null
    studentId?: StringWithAggregatesFilter<"StudentAcademicProfile"> | string
    instituteId?: StringWithAggregatesFilter<"StudentAcademicProfile"> | string
    departmentId?: StringWithAggregatesFilter<"StudentAcademicProfile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StudentAcademicProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentAcademicProfile"> | Date | string
  }

  export type FacultySubjectWhereInput = {
    AND?: FacultySubjectWhereInput | FacultySubjectWhereInput[]
    OR?: FacultySubjectWhereInput[]
    NOT?: FacultySubjectWhereInput | FacultySubjectWhereInput[]
    id?: StringFilter<"FacultySubject"> | string
    subject?: StringFilter<"FacultySubject"> | string
    facultyId?: StringFilter<"FacultySubject"> | string
    departmentId?: StringFilter<"FacultySubject"> | string
    createdAt?: DateTimeFilter<"FacultySubject"> | Date | string
    updatedAt?: DateTimeFilter<"FacultySubject"> | Date | string
    faculty?: XOR<UserScalarRelationFilter, UserWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }

  export type FacultySubjectOrderByWithRelationInput = {
    id?: SortOrder
    subject?: SortOrder
    facultyId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    faculty?: UserOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
  }

  export type FacultySubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FacultySubjectWhereInput | FacultySubjectWhereInput[]
    OR?: FacultySubjectWhereInput[]
    NOT?: FacultySubjectWhereInput | FacultySubjectWhereInput[]
    subject?: StringFilter<"FacultySubject"> | string
    facultyId?: StringFilter<"FacultySubject"> | string
    departmentId?: StringFilter<"FacultySubject"> | string
    createdAt?: DateTimeFilter<"FacultySubject"> | Date | string
    updatedAt?: DateTimeFilter<"FacultySubject"> | Date | string
    faculty?: XOR<UserScalarRelationFilter, UserWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }, "id">

  export type FacultySubjectOrderByWithAggregationInput = {
    id?: SortOrder
    subject?: SortOrder
    facultyId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FacultySubjectCountOrderByAggregateInput
    _max?: FacultySubjectMaxOrderByAggregateInput
    _min?: FacultySubjectMinOrderByAggregateInput
  }

  export type FacultySubjectScalarWhereWithAggregatesInput = {
    AND?: FacultySubjectScalarWhereWithAggregatesInput | FacultySubjectScalarWhereWithAggregatesInput[]
    OR?: FacultySubjectScalarWhereWithAggregatesInput[]
    NOT?: FacultySubjectScalarWhereWithAggregatesInput | FacultySubjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FacultySubject"> | string
    subject?: StringWithAggregatesFilter<"FacultySubject"> | string
    facultyId?: StringWithAggregatesFilter<"FacultySubject"> | string
    departmentId?: StringWithAggregatesFilter<"FacultySubject"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FacultySubject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FacultySubject"> | Date | string
  }

  export type InstituteCreateInput = {
    id?: string
    name: string
    code: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutInstituteInput
    departments?: DepartmentCreateNestedManyWithoutInstituteInput
    students?: StudentAcademicProfileCreateNestedManyWithoutInstituteInput
  }

  export type InstituteUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutInstituteInput
    departments?: DepartmentUncheckedCreateNestedManyWithoutInstituteInput
    students?: StudentAcademicProfileUncheckedCreateNestedManyWithoutInstituteInput
  }

  export type InstituteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutInstituteNestedInput
    departments?: DepartmentUpdateManyWithoutInstituteNestedInput
    students?: StudentAcademicProfileUpdateManyWithoutInstituteNestedInput
  }

  export type InstituteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutInstituteNestedInput
    departments?: DepartmentUncheckedUpdateManyWithoutInstituteNestedInput
    students?: StudentAcademicProfileUncheckedUpdateManyWithoutInstituteNestedInput
  }

  export type InstituteCreateManyInput = {
    id?: string
    name: string
    code: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstituteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstituteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: string
    faceData?: Bytes | null
    rfidUid?: string | null
    biometricTemplate?: Bytes | null
    createdAt?: Date | string
    updatedAt?: Date | string
    institute: InstituteCreateNestedOneWithoutUsersInput
    department?: DepartmentCreateNestedOneWithoutMembersInput
    hodOf?: DepartmentCreateNestedOneWithoutHodInput
    academicProfile?: StudentAcademicProfileCreateNestedOneWithoutStudentInput
    subjectsTaught?: FacultySubjectCreateNestedManyWithoutFacultyInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: string
    faceData?: Bytes | null
    rfidUid?: string | null
    biometricTemplate?: Bytes | null
    instituteId: string
    departmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hodOf?: DepartmentUncheckedCreateNestedOneWithoutHodInput
    academicProfile?: StudentAcademicProfileUncheckedCreateNestedOneWithoutStudentInput
    subjectsTaught?: FacultySubjectUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    faceData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    rfidUid?: NullableStringFieldUpdateOperationsInput | string | null
    biometricTemplate?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institute?: InstituteUpdateOneRequiredWithoutUsersNestedInput
    department?: DepartmentUpdateOneWithoutMembersNestedInput
    hodOf?: DepartmentUpdateOneWithoutHodNestedInput
    academicProfile?: StudentAcademicProfileUpdateOneWithoutStudentNestedInput
    subjectsTaught?: FacultySubjectUpdateManyWithoutFacultyNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    faceData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    rfidUid?: NullableStringFieldUpdateOperationsInput | string | null
    biometricTemplate?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    instituteId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hodOf?: DepartmentUncheckedUpdateOneWithoutHodNestedInput
    academicProfile?: StudentAcademicProfileUncheckedUpdateOneWithoutStudentNestedInput
    subjectsTaught?: FacultySubjectUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: string
    faceData?: Bytes | null
    rfidUid?: string | null
    biometricTemplate?: Bytes | null
    instituteId: string
    departmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    faceData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    rfidUid?: NullableStringFieldUpdateOperationsInput | string | null
    biometricTemplate?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    faceData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    rfidUid?: NullableStringFieldUpdateOperationsInput | string | null
    biometricTemplate?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    instituteId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institute: InstituteCreateNestedOneWithoutDepartmentsInput
    hod?: UserCreateNestedOneWithoutHodOfInput
    members?: UserCreateNestedManyWithoutDepartmentInput
    faculty?: FacultySubjectCreateNestedManyWithoutDepartmentInput
    students?: StudentAcademicProfileCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    instituteId: string
    hodId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutDepartmentInput
    faculty?: FacultySubjectUncheckedCreateNestedManyWithoutDepartmentInput
    students?: StudentAcademicProfileUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institute?: InstituteUpdateOneRequiredWithoutDepartmentsNestedInput
    hod?: UserUpdateOneWithoutHodOfNestedInput
    members?: UserUpdateManyWithoutDepartmentNestedInput
    faculty?: FacultySubjectUpdateManyWithoutDepartmentNestedInput
    students?: StudentAcademicProfileUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instituteId?: StringFieldUpdateOperationsInput | string
    hodId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
    faculty?: FacultySubjectUncheckedUpdateManyWithoutDepartmentNestedInput
    students?: StudentAcademicProfileUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
    instituteId: string
    hodId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instituteId?: StringFieldUpdateOperationsInput | string
    hodId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAcademicProfileCreateInput = {
    id?: string
    year: number
    semester: number
    division: string
    rollNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: UserCreateNestedOneWithoutAcademicProfileInput
    institute: InstituteCreateNestedOneWithoutStudentsInput
    department: DepartmentCreateNestedOneWithoutStudentsInput
  }

  export type StudentAcademicProfileUncheckedCreateInput = {
    id?: string
    year: number
    semester: number
    division: string
    rollNo?: string | null
    studentId: string
    instituteId: string
    departmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentAcademicProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    division?: StringFieldUpdateOperationsInput | string
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutAcademicProfileNestedInput
    institute?: InstituteUpdateOneRequiredWithoutStudentsNestedInput
    department?: DepartmentUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentAcademicProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    division?: StringFieldUpdateOperationsInput | string
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    instituteId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAcademicProfileCreateManyInput = {
    id?: string
    year: number
    semester: number
    division: string
    rollNo?: string | null
    studentId: string
    instituteId: string
    departmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentAcademicProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    division?: StringFieldUpdateOperationsInput | string
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAcademicProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    division?: StringFieldUpdateOperationsInput | string
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    instituteId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultySubjectCreateInput = {
    id?: string
    subject: string
    createdAt?: Date | string
    updatedAt?: Date | string
    faculty: UserCreateNestedOneWithoutSubjectsTaughtInput
    department: DepartmentCreateNestedOneWithoutFacultyInput
  }

  export type FacultySubjectUncheckedCreateInput = {
    id?: string
    subject: string
    facultyId: string
    departmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacultySubjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculty?: UserUpdateOneRequiredWithoutSubjectsTaughtNestedInput
    department?: DepartmentUpdateOneRequiredWithoutFacultyNestedInput
  }

  export type FacultySubjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    facultyId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultySubjectCreateManyInput = {
    id?: string
    subject: string
    facultyId: string
    departmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacultySubjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultySubjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    facultyId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type DepartmentListRelationFilter = {
    every?: DepartmentWhereInput
    some?: DepartmentWhereInput
    none?: DepartmentWhereInput
  }

  export type StudentAcademicProfileListRelationFilter = {
    every?: StudentAcademicProfileWhereInput
    some?: StudentAcademicProfileWhereInput
    none?: StudentAcademicProfileWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentAcademicProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstituteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstituteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstituteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    status?: SortOrder
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

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
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

  export type InstituteScalarRelationFilter = {
    is?: InstituteWhereInput
    isNot?: InstituteWhereInput
  }

  export type DepartmentNullableScalarRelationFilter = {
    is?: DepartmentWhereInput | null
    isNot?: DepartmentWhereInput | null
  }

  export type StudentAcademicProfileNullableScalarRelationFilter = {
    is?: StudentAcademicProfileWhereInput | null
    isNot?: StudentAcademicProfileWhereInput | null
  }

  export type FacultySubjectListRelationFilter = {
    every?: FacultySubjectWhereInput
    some?: FacultySubjectWhereInput
    none?: FacultySubjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FacultySubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserEmailInstituteIdCompoundUniqueInput = {
    email: string
    instituteId: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    faceData?: SortOrder
    rfidUid?: SortOrder
    biometricTemplate?: SortOrder
    instituteId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    faceData?: SortOrder
    rfidUid?: SortOrder
    biometricTemplate?: SortOrder
    instituteId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    faceData?: SortOrder
    rfidUid?: SortOrder
    biometricTemplate?: SortOrder
    instituteId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DepartmentNameInstituteIdCompoundUniqueInput = {
    name: string
    instituteId: string
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    instituteId?: SortOrder
    hodId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    instituteId?: SortOrder
    hodId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    instituteId?: SortOrder
    hodId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type StudentAcademicProfileCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    division?: SortOrder
    rollNo?: SortOrder
    studentId?: SortOrder
    instituteId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAcademicProfileAvgOrderByAggregateInput = {
    year?: SortOrder
    semester?: SortOrder
  }

  export type StudentAcademicProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    division?: SortOrder
    rollNo?: SortOrder
    studentId?: SortOrder
    instituteId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAcademicProfileMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    semester?: SortOrder
    division?: SortOrder
    rollNo?: SortOrder
    studentId?: SortOrder
    instituteId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAcademicProfileSumOrderByAggregateInput = {
    year?: SortOrder
    semester?: SortOrder
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

  export type FacultySubjectCountOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    facultyId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacultySubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    facultyId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacultySubjectMinOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    facultyId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutInstituteInput = {
    create?: XOR<UserCreateWithoutInstituteInput, UserUncheckedCreateWithoutInstituteInput> | UserCreateWithoutInstituteInput[] | UserUncheckedCreateWithoutInstituteInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstituteInput | UserCreateOrConnectWithoutInstituteInput[]
    createMany?: UserCreateManyInstituteInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DepartmentCreateNestedManyWithoutInstituteInput = {
    create?: XOR<DepartmentCreateWithoutInstituteInput, DepartmentUncheckedCreateWithoutInstituteInput> | DepartmentCreateWithoutInstituteInput[] | DepartmentUncheckedCreateWithoutInstituteInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutInstituteInput | DepartmentCreateOrConnectWithoutInstituteInput[]
    createMany?: DepartmentCreateManyInstituteInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type StudentAcademicProfileCreateNestedManyWithoutInstituteInput = {
    create?: XOR<StudentAcademicProfileCreateWithoutInstituteInput, StudentAcademicProfileUncheckedCreateWithoutInstituteInput> | StudentAcademicProfileCreateWithoutInstituteInput[] | StudentAcademicProfileUncheckedCreateWithoutInstituteInput[]
    connectOrCreate?: StudentAcademicProfileCreateOrConnectWithoutInstituteInput | StudentAcademicProfileCreateOrConnectWithoutInstituteInput[]
    createMany?: StudentAcademicProfileCreateManyInstituteInputEnvelope
    connect?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutInstituteInput = {
    create?: XOR<UserCreateWithoutInstituteInput, UserUncheckedCreateWithoutInstituteInput> | UserCreateWithoutInstituteInput[] | UserUncheckedCreateWithoutInstituteInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstituteInput | UserCreateOrConnectWithoutInstituteInput[]
    createMany?: UserCreateManyInstituteInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutInstituteInput = {
    create?: XOR<DepartmentCreateWithoutInstituteInput, DepartmentUncheckedCreateWithoutInstituteInput> | DepartmentCreateWithoutInstituteInput[] | DepartmentUncheckedCreateWithoutInstituteInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutInstituteInput | DepartmentCreateOrConnectWithoutInstituteInput[]
    createMany?: DepartmentCreateManyInstituteInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type StudentAcademicProfileUncheckedCreateNestedManyWithoutInstituteInput = {
    create?: XOR<StudentAcademicProfileCreateWithoutInstituteInput, StudentAcademicProfileUncheckedCreateWithoutInstituteInput> | StudentAcademicProfileCreateWithoutInstituteInput[] | StudentAcademicProfileUncheckedCreateWithoutInstituteInput[]
    connectOrCreate?: StudentAcademicProfileCreateOrConnectWithoutInstituteInput | StudentAcademicProfileCreateOrConnectWithoutInstituteInput[]
    createMany?: StudentAcademicProfileCreateManyInstituteInputEnvelope
    connect?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutInstituteNestedInput = {
    create?: XOR<UserCreateWithoutInstituteInput, UserUncheckedCreateWithoutInstituteInput> | UserCreateWithoutInstituteInput[] | UserUncheckedCreateWithoutInstituteInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstituteInput | UserCreateOrConnectWithoutInstituteInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutInstituteInput | UserUpsertWithWhereUniqueWithoutInstituteInput[]
    createMany?: UserCreateManyInstituteInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutInstituteInput | UserUpdateWithWhereUniqueWithoutInstituteInput[]
    updateMany?: UserUpdateManyWithWhereWithoutInstituteInput | UserUpdateManyWithWhereWithoutInstituteInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DepartmentUpdateManyWithoutInstituteNestedInput = {
    create?: XOR<DepartmentCreateWithoutInstituteInput, DepartmentUncheckedCreateWithoutInstituteInput> | DepartmentCreateWithoutInstituteInput[] | DepartmentUncheckedCreateWithoutInstituteInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutInstituteInput | DepartmentCreateOrConnectWithoutInstituteInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutInstituteInput | DepartmentUpsertWithWhereUniqueWithoutInstituteInput[]
    createMany?: DepartmentCreateManyInstituteInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutInstituteInput | DepartmentUpdateWithWhereUniqueWithoutInstituteInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutInstituteInput | DepartmentUpdateManyWithWhereWithoutInstituteInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type StudentAcademicProfileUpdateManyWithoutInstituteNestedInput = {
    create?: XOR<StudentAcademicProfileCreateWithoutInstituteInput, StudentAcademicProfileUncheckedCreateWithoutInstituteInput> | StudentAcademicProfileCreateWithoutInstituteInput[] | StudentAcademicProfileUncheckedCreateWithoutInstituteInput[]
    connectOrCreate?: StudentAcademicProfileCreateOrConnectWithoutInstituteInput | StudentAcademicProfileCreateOrConnectWithoutInstituteInput[]
    upsert?: StudentAcademicProfileUpsertWithWhereUniqueWithoutInstituteInput | StudentAcademicProfileUpsertWithWhereUniqueWithoutInstituteInput[]
    createMany?: StudentAcademicProfileCreateManyInstituteInputEnvelope
    set?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
    disconnect?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
    delete?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
    connect?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
    update?: StudentAcademicProfileUpdateWithWhereUniqueWithoutInstituteInput | StudentAcademicProfileUpdateWithWhereUniqueWithoutInstituteInput[]
    updateMany?: StudentAcademicProfileUpdateManyWithWhereWithoutInstituteInput | StudentAcademicProfileUpdateManyWithWhereWithoutInstituteInput[]
    deleteMany?: StudentAcademicProfileScalarWhereInput | StudentAcademicProfileScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutInstituteNestedInput = {
    create?: XOR<UserCreateWithoutInstituteInput, UserUncheckedCreateWithoutInstituteInput> | UserCreateWithoutInstituteInput[] | UserUncheckedCreateWithoutInstituteInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstituteInput | UserCreateOrConnectWithoutInstituteInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutInstituteInput | UserUpsertWithWhereUniqueWithoutInstituteInput[]
    createMany?: UserCreateManyInstituteInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutInstituteInput | UserUpdateWithWhereUniqueWithoutInstituteInput[]
    updateMany?: UserUpdateManyWithWhereWithoutInstituteInput | UserUpdateManyWithWhereWithoutInstituteInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutInstituteNestedInput = {
    create?: XOR<DepartmentCreateWithoutInstituteInput, DepartmentUncheckedCreateWithoutInstituteInput> | DepartmentCreateWithoutInstituteInput[] | DepartmentUncheckedCreateWithoutInstituteInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutInstituteInput | DepartmentCreateOrConnectWithoutInstituteInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutInstituteInput | DepartmentUpsertWithWhereUniqueWithoutInstituteInput[]
    createMany?: DepartmentCreateManyInstituteInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutInstituteInput | DepartmentUpdateWithWhereUniqueWithoutInstituteInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutInstituteInput | DepartmentUpdateManyWithWhereWithoutInstituteInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type StudentAcademicProfileUncheckedUpdateManyWithoutInstituteNestedInput = {
    create?: XOR<StudentAcademicProfileCreateWithoutInstituteInput, StudentAcademicProfileUncheckedCreateWithoutInstituteInput> | StudentAcademicProfileCreateWithoutInstituteInput[] | StudentAcademicProfileUncheckedCreateWithoutInstituteInput[]
    connectOrCreate?: StudentAcademicProfileCreateOrConnectWithoutInstituteInput | StudentAcademicProfileCreateOrConnectWithoutInstituteInput[]
    upsert?: StudentAcademicProfileUpsertWithWhereUniqueWithoutInstituteInput | StudentAcademicProfileUpsertWithWhereUniqueWithoutInstituteInput[]
    createMany?: StudentAcademicProfileCreateManyInstituteInputEnvelope
    set?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
    disconnect?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
    delete?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
    connect?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
    update?: StudentAcademicProfileUpdateWithWhereUniqueWithoutInstituteInput | StudentAcademicProfileUpdateWithWhereUniqueWithoutInstituteInput[]
    updateMany?: StudentAcademicProfileUpdateManyWithWhereWithoutInstituteInput | StudentAcademicProfileUpdateManyWithWhereWithoutInstituteInput[]
    deleteMany?: StudentAcademicProfileScalarWhereInput | StudentAcademicProfileScalarWhereInput[]
  }

  export type InstituteCreateNestedOneWithoutUsersInput = {
    create?: XOR<InstituteCreateWithoutUsersInput, InstituteUncheckedCreateWithoutUsersInput>
    connectOrCreate?: InstituteCreateOrConnectWithoutUsersInput
    connect?: InstituteWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutMembersInput = {
    create?: XOR<DepartmentCreateWithoutMembersInput, DepartmentUncheckedCreateWithoutMembersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutMembersInput
    connect?: DepartmentWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutHodInput = {
    create?: XOR<DepartmentCreateWithoutHodInput, DepartmentUncheckedCreateWithoutHodInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutHodInput
    connect?: DepartmentWhereUniqueInput
  }

  export type StudentAcademicProfileCreateNestedOneWithoutStudentInput = {
    create?: XOR<StudentAcademicProfileCreateWithoutStudentInput, StudentAcademicProfileUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentAcademicProfileCreateOrConnectWithoutStudentInput
    connect?: StudentAcademicProfileWhereUniqueInput
  }

  export type FacultySubjectCreateNestedManyWithoutFacultyInput = {
    create?: XOR<FacultySubjectCreateWithoutFacultyInput, FacultySubjectUncheckedCreateWithoutFacultyInput> | FacultySubjectCreateWithoutFacultyInput[] | FacultySubjectUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultySubjectCreateOrConnectWithoutFacultyInput | FacultySubjectCreateOrConnectWithoutFacultyInput[]
    createMany?: FacultySubjectCreateManyFacultyInputEnvelope
    connect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedOneWithoutHodInput = {
    create?: XOR<DepartmentCreateWithoutHodInput, DepartmentUncheckedCreateWithoutHodInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutHodInput
    connect?: DepartmentWhereUniqueInput
  }

  export type StudentAcademicProfileUncheckedCreateNestedOneWithoutStudentInput = {
    create?: XOR<StudentAcademicProfileCreateWithoutStudentInput, StudentAcademicProfileUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentAcademicProfileCreateOrConnectWithoutStudentInput
    connect?: StudentAcademicProfileWhereUniqueInput
  }

  export type FacultySubjectUncheckedCreateNestedManyWithoutFacultyInput = {
    create?: XOR<FacultySubjectCreateWithoutFacultyInput, FacultySubjectUncheckedCreateWithoutFacultyInput> | FacultySubjectCreateWithoutFacultyInput[] | FacultySubjectUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultySubjectCreateOrConnectWithoutFacultyInput | FacultySubjectCreateOrConnectWithoutFacultyInput[]
    createMany?: FacultySubjectCreateManyFacultyInputEnvelope
    connect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Bytes | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type InstituteUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<InstituteCreateWithoutUsersInput, InstituteUncheckedCreateWithoutUsersInput>
    connectOrCreate?: InstituteCreateOrConnectWithoutUsersInput
    upsert?: InstituteUpsertWithoutUsersInput
    connect?: InstituteWhereUniqueInput
    update?: XOR<XOR<InstituteUpdateToOneWithWhereWithoutUsersInput, InstituteUpdateWithoutUsersInput>, InstituteUncheckedUpdateWithoutUsersInput>
  }

  export type DepartmentUpdateOneWithoutMembersNestedInput = {
    create?: XOR<DepartmentCreateWithoutMembersInput, DepartmentUncheckedCreateWithoutMembersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutMembersInput
    upsert?: DepartmentUpsertWithoutMembersInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutMembersInput, DepartmentUpdateWithoutMembersInput>, DepartmentUncheckedUpdateWithoutMembersInput>
  }

  export type DepartmentUpdateOneWithoutHodNestedInput = {
    create?: XOR<DepartmentCreateWithoutHodInput, DepartmentUncheckedCreateWithoutHodInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutHodInput
    upsert?: DepartmentUpsertWithoutHodInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutHodInput, DepartmentUpdateWithoutHodInput>, DepartmentUncheckedUpdateWithoutHodInput>
  }

  export type StudentAcademicProfileUpdateOneWithoutStudentNestedInput = {
    create?: XOR<StudentAcademicProfileCreateWithoutStudentInput, StudentAcademicProfileUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentAcademicProfileCreateOrConnectWithoutStudentInput
    upsert?: StudentAcademicProfileUpsertWithoutStudentInput
    disconnect?: StudentAcademicProfileWhereInput | boolean
    delete?: StudentAcademicProfileWhereInput | boolean
    connect?: StudentAcademicProfileWhereUniqueInput
    update?: XOR<XOR<StudentAcademicProfileUpdateToOneWithWhereWithoutStudentInput, StudentAcademicProfileUpdateWithoutStudentInput>, StudentAcademicProfileUncheckedUpdateWithoutStudentInput>
  }

  export type FacultySubjectUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<FacultySubjectCreateWithoutFacultyInput, FacultySubjectUncheckedCreateWithoutFacultyInput> | FacultySubjectCreateWithoutFacultyInput[] | FacultySubjectUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultySubjectCreateOrConnectWithoutFacultyInput | FacultySubjectCreateOrConnectWithoutFacultyInput[]
    upsert?: FacultySubjectUpsertWithWhereUniqueWithoutFacultyInput | FacultySubjectUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: FacultySubjectCreateManyFacultyInputEnvelope
    set?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    disconnect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    delete?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    connect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    update?: FacultySubjectUpdateWithWhereUniqueWithoutFacultyInput | FacultySubjectUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: FacultySubjectUpdateManyWithWhereWithoutFacultyInput | FacultySubjectUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: FacultySubjectScalarWhereInput | FacultySubjectScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateOneWithoutHodNestedInput = {
    create?: XOR<DepartmentCreateWithoutHodInput, DepartmentUncheckedCreateWithoutHodInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutHodInput
    upsert?: DepartmentUpsertWithoutHodInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutHodInput, DepartmentUpdateWithoutHodInput>, DepartmentUncheckedUpdateWithoutHodInput>
  }

  export type StudentAcademicProfileUncheckedUpdateOneWithoutStudentNestedInput = {
    create?: XOR<StudentAcademicProfileCreateWithoutStudentInput, StudentAcademicProfileUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentAcademicProfileCreateOrConnectWithoutStudentInput
    upsert?: StudentAcademicProfileUpsertWithoutStudentInput
    disconnect?: StudentAcademicProfileWhereInput | boolean
    delete?: StudentAcademicProfileWhereInput | boolean
    connect?: StudentAcademicProfileWhereUniqueInput
    update?: XOR<XOR<StudentAcademicProfileUpdateToOneWithWhereWithoutStudentInput, StudentAcademicProfileUpdateWithoutStudentInput>, StudentAcademicProfileUncheckedUpdateWithoutStudentInput>
  }

  export type FacultySubjectUncheckedUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<FacultySubjectCreateWithoutFacultyInput, FacultySubjectUncheckedCreateWithoutFacultyInput> | FacultySubjectCreateWithoutFacultyInput[] | FacultySubjectUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultySubjectCreateOrConnectWithoutFacultyInput | FacultySubjectCreateOrConnectWithoutFacultyInput[]
    upsert?: FacultySubjectUpsertWithWhereUniqueWithoutFacultyInput | FacultySubjectUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: FacultySubjectCreateManyFacultyInputEnvelope
    set?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    disconnect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    delete?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    connect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    update?: FacultySubjectUpdateWithWhereUniqueWithoutFacultyInput | FacultySubjectUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: FacultySubjectUpdateManyWithWhereWithoutFacultyInput | FacultySubjectUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: FacultySubjectScalarWhereInput | FacultySubjectScalarWhereInput[]
  }

  export type InstituteCreateNestedOneWithoutDepartmentsInput = {
    create?: XOR<InstituteCreateWithoutDepartmentsInput, InstituteUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: InstituteCreateOrConnectWithoutDepartmentsInput
    connect?: InstituteWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutHodOfInput = {
    create?: XOR<UserCreateWithoutHodOfInput, UserUncheckedCreateWithoutHodOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutHodOfInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FacultySubjectCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<FacultySubjectCreateWithoutDepartmentInput, FacultySubjectUncheckedCreateWithoutDepartmentInput> | FacultySubjectCreateWithoutDepartmentInput[] | FacultySubjectUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultySubjectCreateOrConnectWithoutDepartmentInput | FacultySubjectCreateOrConnectWithoutDepartmentInput[]
    createMany?: FacultySubjectCreateManyDepartmentInputEnvelope
    connect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
  }

  export type StudentAcademicProfileCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<StudentAcademicProfileCreateWithoutDepartmentInput, StudentAcademicProfileUncheckedCreateWithoutDepartmentInput> | StudentAcademicProfileCreateWithoutDepartmentInput[] | StudentAcademicProfileUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: StudentAcademicProfileCreateOrConnectWithoutDepartmentInput | StudentAcademicProfileCreateOrConnectWithoutDepartmentInput[]
    createMany?: StudentAcademicProfileCreateManyDepartmentInputEnvelope
    connect?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FacultySubjectUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<FacultySubjectCreateWithoutDepartmentInput, FacultySubjectUncheckedCreateWithoutDepartmentInput> | FacultySubjectCreateWithoutDepartmentInput[] | FacultySubjectUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultySubjectCreateOrConnectWithoutDepartmentInput | FacultySubjectCreateOrConnectWithoutDepartmentInput[]
    createMany?: FacultySubjectCreateManyDepartmentInputEnvelope
    connect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
  }

  export type StudentAcademicProfileUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<StudentAcademicProfileCreateWithoutDepartmentInput, StudentAcademicProfileUncheckedCreateWithoutDepartmentInput> | StudentAcademicProfileCreateWithoutDepartmentInput[] | StudentAcademicProfileUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: StudentAcademicProfileCreateOrConnectWithoutDepartmentInput | StudentAcademicProfileCreateOrConnectWithoutDepartmentInput[]
    createMany?: StudentAcademicProfileCreateManyDepartmentInputEnvelope
    connect?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
  }

  export type InstituteUpdateOneRequiredWithoutDepartmentsNestedInput = {
    create?: XOR<InstituteCreateWithoutDepartmentsInput, InstituteUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: InstituteCreateOrConnectWithoutDepartmentsInput
    upsert?: InstituteUpsertWithoutDepartmentsInput
    connect?: InstituteWhereUniqueInput
    update?: XOR<XOR<InstituteUpdateToOneWithWhereWithoutDepartmentsInput, InstituteUpdateWithoutDepartmentsInput>, InstituteUncheckedUpdateWithoutDepartmentsInput>
  }

  export type UserUpdateOneWithoutHodOfNestedInput = {
    create?: XOR<UserCreateWithoutHodOfInput, UserUncheckedCreateWithoutHodOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutHodOfInput
    upsert?: UserUpsertWithoutHodOfInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHodOfInput, UserUpdateWithoutHodOfInput>, UserUncheckedUpdateWithoutHodOfInput>
  }

  export type UserUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FacultySubjectUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<FacultySubjectCreateWithoutDepartmentInput, FacultySubjectUncheckedCreateWithoutDepartmentInput> | FacultySubjectCreateWithoutDepartmentInput[] | FacultySubjectUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultySubjectCreateOrConnectWithoutDepartmentInput | FacultySubjectCreateOrConnectWithoutDepartmentInput[]
    upsert?: FacultySubjectUpsertWithWhereUniqueWithoutDepartmentInput | FacultySubjectUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: FacultySubjectCreateManyDepartmentInputEnvelope
    set?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    disconnect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    delete?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    connect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    update?: FacultySubjectUpdateWithWhereUniqueWithoutDepartmentInput | FacultySubjectUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: FacultySubjectUpdateManyWithWhereWithoutDepartmentInput | FacultySubjectUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: FacultySubjectScalarWhereInput | FacultySubjectScalarWhereInput[]
  }

  export type StudentAcademicProfileUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<StudentAcademicProfileCreateWithoutDepartmentInput, StudentAcademicProfileUncheckedCreateWithoutDepartmentInput> | StudentAcademicProfileCreateWithoutDepartmentInput[] | StudentAcademicProfileUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: StudentAcademicProfileCreateOrConnectWithoutDepartmentInput | StudentAcademicProfileCreateOrConnectWithoutDepartmentInput[]
    upsert?: StudentAcademicProfileUpsertWithWhereUniqueWithoutDepartmentInput | StudentAcademicProfileUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: StudentAcademicProfileCreateManyDepartmentInputEnvelope
    set?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
    disconnect?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
    delete?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
    connect?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
    update?: StudentAcademicProfileUpdateWithWhereUniqueWithoutDepartmentInput | StudentAcademicProfileUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: StudentAcademicProfileUpdateManyWithWhereWithoutDepartmentInput | StudentAcademicProfileUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: StudentAcademicProfileScalarWhereInput | StudentAcademicProfileScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FacultySubjectUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<FacultySubjectCreateWithoutDepartmentInput, FacultySubjectUncheckedCreateWithoutDepartmentInput> | FacultySubjectCreateWithoutDepartmentInput[] | FacultySubjectUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultySubjectCreateOrConnectWithoutDepartmentInput | FacultySubjectCreateOrConnectWithoutDepartmentInput[]
    upsert?: FacultySubjectUpsertWithWhereUniqueWithoutDepartmentInput | FacultySubjectUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: FacultySubjectCreateManyDepartmentInputEnvelope
    set?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    disconnect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    delete?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    connect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    update?: FacultySubjectUpdateWithWhereUniqueWithoutDepartmentInput | FacultySubjectUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: FacultySubjectUpdateManyWithWhereWithoutDepartmentInput | FacultySubjectUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: FacultySubjectScalarWhereInput | FacultySubjectScalarWhereInput[]
  }

  export type StudentAcademicProfileUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<StudentAcademicProfileCreateWithoutDepartmentInput, StudentAcademicProfileUncheckedCreateWithoutDepartmentInput> | StudentAcademicProfileCreateWithoutDepartmentInput[] | StudentAcademicProfileUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: StudentAcademicProfileCreateOrConnectWithoutDepartmentInput | StudentAcademicProfileCreateOrConnectWithoutDepartmentInput[]
    upsert?: StudentAcademicProfileUpsertWithWhereUniqueWithoutDepartmentInput | StudentAcademicProfileUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: StudentAcademicProfileCreateManyDepartmentInputEnvelope
    set?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
    disconnect?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
    delete?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
    connect?: StudentAcademicProfileWhereUniqueInput | StudentAcademicProfileWhereUniqueInput[]
    update?: StudentAcademicProfileUpdateWithWhereUniqueWithoutDepartmentInput | StudentAcademicProfileUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: StudentAcademicProfileUpdateManyWithWhereWithoutDepartmentInput | StudentAcademicProfileUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: StudentAcademicProfileScalarWhereInput | StudentAcademicProfileScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAcademicProfileInput = {
    create?: XOR<UserCreateWithoutAcademicProfileInput, UserUncheckedCreateWithoutAcademicProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutAcademicProfileInput
    connect?: UserWhereUniqueInput
  }

  export type InstituteCreateNestedOneWithoutStudentsInput = {
    create?: XOR<InstituteCreateWithoutStudentsInput, InstituteUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: InstituteCreateOrConnectWithoutStudentsInput
    connect?: InstituteWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutStudentsInput = {
    create?: XOR<DepartmentCreateWithoutStudentsInput, DepartmentUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutStudentsInput
    connect?: DepartmentWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAcademicProfileNestedInput = {
    create?: XOR<UserCreateWithoutAcademicProfileInput, UserUncheckedCreateWithoutAcademicProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutAcademicProfileInput
    upsert?: UserUpsertWithoutAcademicProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAcademicProfileInput, UserUpdateWithoutAcademicProfileInput>, UserUncheckedUpdateWithoutAcademicProfileInput>
  }

  export type InstituteUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<InstituteCreateWithoutStudentsInput, InstituteUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: InstituteCreateOrConnectWithoutStudentsInput
    upsert?: InstituteUpsertWithoutStudentsInput
    connect?: InstituteWhereUniqueInput
    update?: XOR<XOR<InstituteUpdateToOneWithWhereWithoutStudentsInput, InstituteUpdateWithoutStudentsInput>, InstituteUncheckedUpdateWithoutStudentsInput>
  }

  export type DepartmentUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<DepartmentCreateWithoutStudentsInput, DepartmentUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutStudentsInput
    upsert?: DepartmentUpsertWithoutStudentsInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutStudentsInput, DepartmentUpdateWithoutStudentsInput>, DepartmentUncheckedUpdateWithoutStudentsInput>
  }

  export type UserCreateNestedOneWithoutSubjectsTaughtInput = {
    create?: XOR<UserCreateWithoutSubjectsTaughtInput, UserUncheckedCreateWithoutSubjectsTaughtInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubjectsTaughtInput
    connect?: UserWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutFacultyInput = {
    create?: XOR<DepartmentCreateWithoutFacultyInput, DepartmentUncheckedCreateWithoutFacultyInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutFacultyInput
    connect?: DepartmentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubjectsTaughtNestedInput = {
    create?: XOR<UserCreateWithoutSubjectsTaughtInput, UserUncheckedCreateWithoutSubjectsTaughtInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubjectsTaughtInput
    upsert?: UserUpsertWithoutSubjectsTaughtInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubjectsTaughtInput, UserUpdateWithoutSubjectsTaughtInput>, UserUncheckedUpdateWithoutSubjectsTaughtInput>
  }

  export type DepartmentUpdateOneRequiredWithoutFacultyNestedInput = {
    create?: XOR<DepartmentCreateWithoutFacultyInput, DepartmentUncheckedCreateWithoutFacultyInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutFacultyInput
    upsert?: DepartmentUpsertWithoutFacultyInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutFacultyInput, DepartmentUpdateWithoutFacultyInput>, DepartmentUncheckedUpdateWithoutFacultyInput>
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

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
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

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
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

  export type UserCreateWithoutInstituteInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: string
    faceData?: Bytes | null
    rfidUid?: string | null
    biometricTemplate?: Bytes | null
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutMembersInput
    hodOf?: DepartmentCreateNestedOneWithoutHodInput
    academicProfile?: StudentAcademicProfileCreateNestedOneWithoutStudentInput
    subjectsTaught?: FacultySubjectCreateNestedManyWithoutFacultyInput
  }

  export type UserUncheckedCreateWithoutInstituteInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: string
    faceData?: Bytes | null
    rfidUid?: string | null
    biometricTemplate?: Bytes | null
    departmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hodOf?: DepartmentUncheckedCreateNestedOneWithoutHodInput
    academicProfile?: StudentAcademicProfileUncheckedCreateNestedOneWithoutStudentInput
    subjectsTaught?: FacultySubjectUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type UserCreateOrConnectWithoutInstituteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInstituteInput, UserUncheckedCreateWithoutInstituteInput>
  }

  export type UserCreateManyInstituteInputEnvelope = {
    data: UserCreateManyInstituteInput | UserCreateManyInstituteInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentCreateWithoutInstituteInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hod?: UserCreateNestedOneWithoutHodOfInput
    members?: UserCreateNestedManyWithoutDepartmentInput
    faculty?: FacultySubjectCreateNestedManyWithoutDepartmentInput
    students?: StudentAcademicProfileCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutInstituteInput = {
    id?: string
    name: string
    hodId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutDepartmentInput
    faculty?: FacultySubjectUncheckedCreateNestedManyWithoutDepartmentInput
    students?: StudentAcademicProfileUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutInstituteInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutInstituteInput, DepartmentUncheckedCreateWithoutInstituteInput>
  }

  export type DepartmentCreateManyInstituteInputEnvelope = {
    data: DepartmentCreateManyInstituteInput | DepartmentCreateManyInstituteInput[]
    skipDuplicates?: boolean
  }

  export type StudentAcademicProfileCreateWithoutInstituteInput = {
    id?: string
    year: number
    semester: number
    division: string
    rollNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: UserCreateNestedOneWithoutAcademicProfileInput
    department: DepartmentCreateNestedOneWithoutStudentsInput
  }

  export type StudentAcademicProfileUncheckedCreateWithoutInstituteInput = {
    id?: string
    year: number
    semester: number
    division: string
    rollNo?: string | null
    studentId: string
    departmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentAcademicProfileCreateOrConnectWithoutInstituteInput = {
    where: StudentAcademicProfileWhereUniqueInput
    create: XOR<StudentAcademicProfileCreateWithoutInstituteInput, StudentAcademicProfileUncheckedCreateWithoutInstituteInput>
  }

  export type StudentAcademicProfileCreateManyInstituteInputEnvelope = {
    data: StudentAcademicProfileCreateManyInstituteInput | StudentAcademicProfileCreateManyInstituteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutInstituteInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutInstituteInput, UserUncheckedUpdateWithoutInstituteInput>
    create: XOR<UserCreateWithoutInstituteInput, UserUncheckedCreateWithoutInstituteInput>
  }

  export type UserUpdateWithWhereUniqueWithoutInstituteInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutInstituteInput, UserUncheckedUpdateWithoutInstituteInput>
  }

  export type UserUpdateManyWithWhereWithoutInstituteInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutInstituteInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    faceData?: BytesNullableFilter<"User"> | Bytes | null
    rfidUid?: StringNullableFilter<"User"> | string | null
    biometricTemplate?: BytesNullableFilter<"User"> | Bytes | null
    instituteId?: StringFilter<"User"> | string
    departmentId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type DepartmentUpsertWithWhereUniqueWithoutInstituteInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutInstituteInput, DepartmentUncheckedUpdateWithoutInstituteInput>
    create: XOR<DepartmentCreateWithoutInstituteInput, DepartmentUncheckedCreateWithoutInstituteInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutInstituteInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutInstituteInput, DepartmentUncheckedUpdateWithoutInstituteInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutInstituteInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutInstituteInput>
  }

  export type DepartmentScalarWhereInput = {
    AND?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    OR?: DepartmentScalarWhereInput[]
    NOT?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    instituteId?: StringFilter<"Department"> | string
    hodId?: StringNullableFilter<"Department"> | string | null
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
  }

  export type StudentAcademicProfileUpsertWithWhereUniqueWithoutInstituteInput = {
    where: StudentAcademicProfileWhereUniqueInput
    update: XOR<StudentAcademicProfileUpdateWithoutInstituteInput, StudentAcademicProfileUncheckedUpdateWithoutInstituteInput>
    create: XOR<StudentAcademicProfileCreateWithoutInstituteInput, StudentAcademicProfileUncheckedCreateWithoutInstituteInput>
  }

  export type StudentAcademicProfileUpdateWithWhereUniqueWithoutInstituteInput = {
    where: StudentAcademicProfileWhereUniqueInput
    data: XOR<StudentAcademicProfileUpdateWithoutInstituteInput, StudentAcademicProfileUncheckedUpdateWithoutInstituteInput>
  }

  export type StudentAcademicProfileUpdateManyWithWhereWithoutInstituteInput = {
    where: StudentAcademicProfileScalarWhereInput
    data: XOR<StudentAcademicProfileUpdateManyMutationInput, StudentAcademicProfileUncheckedUpdateManyWithoutInstituteInput>
  }

  export type StudentAcademicProfileScalarWhereInput = {
    AND?: StudentAcademicProfileScalarWhereInput | StudentAcademicProfileScalarWhereInput[]
    OR?: StudentAcademicProfileScalarWhereInput[]
    NOT?: StudentAcademicProfileScalarWhereInput | StudentAcademicProfileScalarWhereInput[]
    id?: StringFilter<"StudentAcademicProfile"> | string
    year?: IntFilter<"StudentAcademicProfile"> | number
    semester?: IntFilter<"StudentAcademicProfile"> | number
    division?: StringFilter<"StudentAcademicProfile"> | string
    rollNo?: StringNullableFilter<"StudentAcademicProfile"> | string | null
    studentId?: StringFilter<"StudentAcademicProfile"> | string
    instituteId?: StringFilter<"StudentAcademicProfile"> | string
    departmentId?: StringFilter<"StudentAcademicProfile"> | string
    createdAt?: DateTimeFilter<"StudentAcademicProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StudentAcademicProfile"> | Date | string
  }

  export type InstituteCreateWithoutUsersInput = {
    id?: string
    name: string
    code: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCreateNestedManyWithoutInstituteInput
    students?: StudentAcademicProfileCreateNestedManyWithoutInstituteInput
  }

  export type InstituteUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    code: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutInstituteInput
    students?: StudentAcademicProfileUncheckedCreateNestedManyWithoutInstituteInput
  }

  export type InstituteCreateOrConnectWithoutUsersInput = {
    where: InstituteWhereUniqueInput
    create: XOR<InstituteCreateWithoutUsersInput, InstituteUncheckedCreateWithoutUsersInput>
  }

  export type DepartmentCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institute: InstituteCreateNestedOneWithoutDepartmentsInput
    hod?: UserCreateNestedOneWithoutHodOfInput
    faculty?: FacultySubjectCreateNestedManyWithoutDepartmentInput
    students?: StudentAcademicProfileCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    instituteId: string
    hodId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    faculty?: FacultySubjectUncheckedCreateNestedManyWithoutDepartmentInput
    students?: StudentAcademicProfileUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutMembersInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutMembersInput, DepartmentUncheckedCreateWithoutMembersInput>
  }

  export type DepartmentCreateWithoutHodInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institute: InstituteCreateNestedOneWithoutDepartmentsInput
    members?: UserCreateNestedManyWithoutDepartmentInput
    faculty?: FacultySubjectCreateNestedManyWithoutDepartmentInput
    students?: StudentAcademicProfileCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutHodInput = {
    id?: string
    name: string
    instituteId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutDepartmentInput
    faculty?: FacultySubjectUncheckedCreateNestedManyWithoutDepartmentInput
    students?: StudentAcademicProfileUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutHodInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutHodInput, DepartmentUncheckedCreateWithoutHodInput>
  }

  export type StudentAcademicProfileCreateWithoutStudentInput = {
    id?: string
    year: number
    semester: number
    division: string
    rollNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    institute: InstituteCreateNestedOneWithoutStudentsInput
    department: DepartmentCreateNestedOneWithoutStudentsInput
  }

  export type StudentAcademicProfileUncheckedCreateWithoutStudentInput = {
    id?: string
    year: number
    semester: number
    division: string
    rollNo?: string | null
    instituteId: string
    departmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentAcademicProfileCreateOrConnectWithoutStudentInput = {
    where: StudentAcademicProfileWhereUniqueInput
    create: XOR<StudentAcademicProfileCreateWithoutStudentInput, StudentAcademicProfileUncheckedCreateWithoutStudentInput>
  }

  export type FacultySubjectCreateWithoutFacultyInput = {
    id?: string
    subject: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department: DepartmentCreateNestedOneWithoutFacultyInput
  }

  export type FacultySubjectUncheckedCreateWithoutFacultyInput = {
    id?: string
    subject: string
    departmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacultySubjectCreateOrConnectWithoutFacultyInput = {
    where: FacultySubjectWhereUniqueInput
    create: XOR<FacultySubjectCreateWithoutFacultyInput, FacultySubjectUncheckedCreateWithoutFacultyInput>
  }

  export type FacultySubjectCreateManyFacultyInputEnvelope = {
    data: FacultySubjectCreateManyFacultyInput | FacultySubjectCreateManyFacultyInput[]
    skipDuplicates?: boolean
  }

  export type InstituteUpsertWithoutUsersInput = {
    update: XOR<InstituteUpdateWithoutUsersInput, InstituteUncheckedUpdateWithoutUsersInput>
    create: XOR<InstituteCreateWithoutUsersInput, InstituteUncheckedCreateWithoutUsersInput>
    where?: InstituteWhereInput
  }

  export type InstituteUpdateToOneWithWhereWithoutUsersInput = {
    where?: InstituteWhereInput
    data: XOR<InstituteUpdateWithoutUsersInput, InstituteUncheckedUpdateWithoutUsersInput>
  }

  export type InstituteUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutInstituteNestedInput
    students?: StudentAcademicProfileUpdateManyWithoutInstituteNestedInput
  }

  export type InstituteUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutInstituteNestedInput
    students?: StudentAcademicProfileUncheckedUpdateManyWithoutInstituteNestedInput
  }

  export type DepartmentUpsertWithoutMembersInput = {
    update: XOR<DepartmentUpdateWithoutMembersInput, DepartmentUncheckedUpdateWithoutMembersInput>
    create: XOR<DepartmentCreateWithoutMembersInput, DepartmentUncheckedCreateWithoutMembersInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutMembersInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutMembersInput, DepartmentUncheckedUpdateWithoutMembersInput>
  }

  export type DepartmentUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institute?: InstituteUpdateOneRequiredWithoutDepartmentsNestedInput
    hod?: UserUpdateOneWithoutHodOfNestedInput
    faculty?: FacultySubjectUpdateManyWithoutDepartmentNestedInput
    students?: StudentAcademicProfileUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instituteId?: StringFieldUpdateOperationsInput | string
    hodId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculty?: FacultySubjectUncheckedUpdateManyWithoutDepartmentNestedInput
    students?: StudentAcademicProfileUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUpsertWithoutHodInput = {
    update: XOR<DepartmentUpdateWithoutHodInput, DepartmentUncheckedUpdateWithoutHodInput>
    create: XOR<DepartmentCreateWithoutHodInput, DepartmentUncheckedCreateWithoutHodInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutHodInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutHodInput, DepartmentUncheckedUpdateWithoutHodInput>
  }

  export type DepartmentUpdateWithoutHodInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institute?: InstituteUpdateOneRequiredWithoutDepartmentsNestedInput
    members?: UserUpdateManyWithoutDepartmentNestedInput
    faculty?: FacultySubjectUpdateManyWithoutDepartmentNestedInput
    students?: StudentAcademicProfileUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutHodInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instituteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
    faculty?: FacultySubjectUncheckedUpdateManyWithoutDepartmentNestedInput
    students?: StudentAcademicProfileUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type StudentAcademicProfileUpsertWithoutStudentInput = {
    update: XOR<StudentAcademicProfileUpdateWithoutStudentInput, StudentAcademicProfileUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentAcademicProfileCreateWithoutStudentInput, StudentAcademicProfileUncheckedCreateWithoutStudentInput>
    where?: StudentAcademicProfileWhereInput
  }

  export type StudentAcademicProfileUpdateToOneWithWhereWithoutStudentInput = {
    where?: StudentAcademicProfileWhereInput
    data: XOR<StudentAcademicProfileUpdateWithoutStudentInput, StudentAcademicProfileUncheckedUpdateWithoutStudentInput>
  }

  export type StudentAcademicProfileUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    division?: StringFieldUpdateOperationsInput | string
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institute?: InstituteUpdateOneRequiredWithoutStudentsNestedInput
    department?: DepartmentUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentAcademicProfileUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    division?: StringFieldUpdateOperationsInput | string
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    instituteId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultySubjectUpsertWithWhereUniqueWithoutFacultyInput = {
    where: FacultySubjectWhereUniqueInput
    update: XOR<FacultySubjectUpdateWithoutFacultyInput, FacultySubjectUncheckedUpdateWithoutFacultyInput>
    create: XOR<FacultySubjectCreateWithoutFacultyInput, FacultySubjectUncheckedCreateWithoutFacultyInput>
  }

  export type FacultySubjectUpdateWithWhereUniqueWithoutFacultyInput = {
    where: FacultySubjectWhereUniqueInput
    data: XOR<FacultySubjectUpdateWithoutFacultyInput, FacultySubjectUncheckedUpdateWithoutFacultyInput>
  }

  export type FacultySubjectUpdateManyWithWhereWithoutFacultyInput = {
    where: FacultySubjectScalarWhereInput
    data: XOR<FacultySubjectUpdateManyMutationInput, FacultySubjectUncheckedUpdateManyWithoutFacultyInput>
  }

  export type FacultySubjectScalarWhereInput = {
    AND?: FacultySubjectScalarWhereInput | FacultySubjectScalarWhereInput[]
    OR?: FacultySubjectScalarWhereInput[]
    NOT?: FacultySubjectScalarWhereInput | FacultySubjectScalarWhereInput[]
    id?: StringFilter<"FacultySubject"> | string
    subject?: StringFilter<"FacultySubject"> | string
    facultyId?: StringFilter<"FacultySubject"> | string
    departmentId?: StringFilter<"FacultySubject"> | string
    createdAt?: DateTimeFilter<"FacultySubject"> | Date | string
    updatedAt?: DateTimeFilter<"FacultySubject"> | Date | string
  }

  export type InstituteCreateWithoutDepartmentsInput = {
    id?: string
    name: string
    code: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutInstituteInput
    students?: StudentAcademicProfileCreateNestedManyWithoutInstituteInput
  }

  export type InstituteUncheckedCreateWithoutDepartmentsInput = {
    id?: string
    name: string
    code: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutInstituteInput
    students?: StudentAcademicProfileUncheckedCreateNestedManyWithoutInstituteInput
  }

  export type InstituteCreateOrConnectWithoutDepartmentsInput = {
    where: InstituteWhereUniqueInput
    create: XOR<InstituteCreateWithoutDepartmentsInput, InstituteUncheckedCreateWithoutDepartmentsInput>
  }

  export type UserCreateWithoutHodOfInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: string
    faceData?: Bytes | null
    rfidUid?: string | null
    biometricTemplate?: Bytes | null
    createdAt?: Date | string
    updatedAt?: Date | string
    institute: InstituteCreateNestedOneWithoutUsersInput
    department?: DepartmentCreateNestedOneWithoutMembersInput
    academicProfile?: StudentAcademicProfileCreateNestedOneWithoutStudentInput
    subjectsTaught?: FacultySubjectCreateNestedManyWithoutFacultyInput
  }

  export type UserUncheckedCreateWithoutHodOfInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: string
    faceData?: Bytes | null
    rfidUid?: string | null
    biometricTemplate?: Bytes | null
    instituteId: string
    departmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    academicProfile?: StudentAcademicProfileUncheckedCreateNestedOneWithoutStudentInput
    subjectsTaught?: FacultySubjectUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type UserCreateOrConnectWithoutHodOfInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHodOfInput, UserUncheckedCreateWithoutHodOfInput>
  }

  export type UserCreateWithoutDepartmentInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: string
    faceData?: Bytes | null
    rfidUid?: string | null
    biometricTemplate?: Bytes | null
    createdAt?: Date | string
    updatedAt?: Date | string
    institute: InstituteCreateNestedOneWithoutUsersInput
    hodOf?: DepartmentCreateNestedOneWithoutHodInput
    academicProfile?: StudentAcademicProfileCreateNestedOneWithoutStudentInput
    subjectsTaught?: FacultySubjectCreateNestedManyWithoutFacultyInput
  }

  export type UserUncheckedCreateWithoutDepartmentInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: string
    faceData?: Bytes | null
    rfidUid?: string | null
    biometricTemplate?: Bytes | null
    instituteId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hodOf?: DepartmentUncheckedCreateNestedOneWithoutHodInput
    academicProfile?: StudentAcademicProfileUncheckedCreateNestedOneWithoutStudentInput
    subjectsTaught?: FacultySubjectUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type UserCreateOrConnectWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserCreateManyDepartmentInputEnvelope = {
    data: UserCreateManyDepartmentInput | UserCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type FacultySubjectCreateWithoutDepartmentInput = {
    id?: string
    subject: string
    createdAt?: Date | string
    updatedAt?: Date | string
    faculty: UserCreateNestedOneWithoutSubjectsTaughtInput
  }

  export type FacultySubjectUncheckedCreateWithoutDepartmentInput = {
    id?: string
    subject: string
    facultyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacultySubjectCreateOrConnectWithoutDepartmentInput = {
    where: FacultySubjectWhereUniqueInput
    create: XOR<FacultySubjectCreateWithoutDepartmentInput, FacultySubjectUncheckedCreateWithoutDepartmentInput>
  }

  export type FacultySubjectCreateManyDepartmentInputEnvelope = {
    data: FacultySubjectCreateManyDepartmentInput | FacultySubjectCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type StudentAcademicProfileCreateWithoutDepartmentInput = {
    id?: string
    year: number
    semester: number
    division: string
    rollNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: UserCreateNestedOneWithoutAcademicProfileInput
    institute: InstituteCreateNestedOneWithoutStudentsInput
  }

  export type StudentAcademicProfileUncheckedCreateWithoutDepartmentInput = {
    id?: string
    year: number
    semester: number
    division: string
    rollNo?: string | null
    studentId: string
    instituteId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentAcademicProfileCreateOrConnectWithoutDepartmentInput = {
    where: StudentAcademicProfileWhereUniqueInput
    create: XOR<StudentAcademicProfileCreateWithoutDepartmentInput, StudentAcademicProfileUncheckedCreateWithoutDepartmentInput>
  }

  export type StudentAcademicProfileCreateManyDepartmentInputEnvelope = {
    data: StudentAcademicProfileCreateManyDepartmentInput | StudentAcademicProfileCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type InstituteUpsertWithoutDepartmentsInput = {
    update: XOR<InstituteUpdateWithoutDepartmentsInput, InstituteUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<InstituteCreateWithoutDepartmentsInput, InstituteUncheckedCreateWithoutDepartmentsInput>
    where?: InstituteWhereInput
  }

  export type InstituteUpdateToOneWithWhereWithoutDepartmentsInput = {
    where?: InstituteWhereInput
    data: XOR<InstituteUpdateWithoutDepartmentsInput, InstituteUncheckedUpdateWithoutDepartmentsInput>
  }

  export type InstituteUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutInstituteNestedInput
    students?: StudentAcademicProfileUpdateManyWithoutInstituteNestedInput
  }

  export type InstituteUncheckedUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutInstituteNestedInput
    students?: StudentAcademicProfileUncheckedUpdateManyWithoutInstituteNestedInput
  }

  export type UserUpsertWithoutHodOfInput = {
    update: XOR<UserUpdateWithoutHodOfInput, UserUncheckedUpdateWithoutHodOfInput>
    create: XOR<UserCreateWithoutHodOfInput, UserUncheckedCreateWithoutHodOfInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHodOfInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHodOfInput, UserUncheckedUpdateWithoutHodOfInput>
  }

  export type UserUpdateWithoutHodOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    faceData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    rfidUid?: NullableStringFieldUpdateOperationsInput | string | null
    biometricTemplate?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institute?: InstituteUpdateOneRequiredWithoutUsersNestedInput
    department?: DepartmentUpdateOneWithoutMembersNestedInput
    academicProfile?: StudentAcademicProfileUpdateOneWithoutStudentNestedInput
    subjectsTaught?: FacultySubjectUpdateManyWithoutFacultyNestedInput
  }

  export type UserUncheckedUpdateWithoutHodOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    faceData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    rfidUid?: NullableStringFieldUpdateOperationsInput | string | null
    biometricTemplate?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    instituteId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    academicProfile?: StudentAcademicProfileUncheckedUpdateOneWithoutStudentNestedInput
    subjectsTaught?: FacultySubjectUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
  }

  export type UserUpdateManyWithWhereWithoutDepartmentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type FacultySubjectUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: FacultySubjectWhereUniqueInput
    update: XOR<FacultySubjectUpdateWithoutDepartmentInput, FacultySubjectUncheckedUpdateWithoutDepartmentInput>
    create: XOR<FacultySubjectCreateWithoutDepartmentInput, FacultySubjectUncheckedCreateWithoutDepartmentInput>
  }

  export type FacultySubjectUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: FacultySubjectWhereUniqueInput
    data: XOR<FacultySubjectUpdateWithoutDepartmentInput, FacultySubjectUncheckedUpdateWithoutDepartmentInput>
  }

  export type FacultySubjectUpdateManyWithWhereWithoutDepartmentInput = {
    where: FacultySubjectScalarWhereInput
    data: XOR<FacultySubjectUpdateManyMutationInput, FacultySubjectUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type StudentAcademicProfileUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: StudentAcademicProfileWhereUniqueInput
    update: XOR<StudentAcademicProfileUpdateWithoutDepartmentInput, StudentAcademicProfileUncheckedUpdateWithoutDepartmentInput>
    create: XOR<StudentAcademicProfileCreateWithoutDepartmentInput, StudentAcademicProfileUncheckedCreateWithoutDepartmentInput>
  }

  export type StudentAcademicProfileUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: StudentAcademicProfileWhereUniqueInput
    data: XOR<StudentAcademicProfileUpdateWithoutDepartmentInput, StudentAcademicProfileUncheckedUpdateWithoutDepartmentInput>
  }

  export type StudentAcademicProfileUpdateManyWithWhereWithoutDepartmentInput = {
    where: StudentAcademicProfileScalarWhereInput
    data: XOR<StudentAcademicProfileUpdateManyMutationInput, StudentAcademicProfileUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type UserCreateWithoutAcademicProfileInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: string
    faceData?: Bytes | null
    rfidUid?: string | null
    biometricTemplate?: Bytes | null
    createdAt?: Date | string
    updatedAt?: Date | string
    institute: InstituteCreateNestedOneWithoutUsersInput
    department?: DepartmentCreateNestedOneWithoutMembersInput
    hodOf?: DepartmentCreateNestedOneWithoutHodInput
    subjectsTaught?: FacultySubjectCreateNestedManyWithoutFacultyInput
  }

  export type UserUncheckedCreateWithoutAcademicProfileInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: string
    faceData?: Bytes | null
    rfidUid?: string | null
    biometricTemplate?: Bytes | null
    instituteId: string
    departmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hodOf?: DepartmentUncheckedCreateNestedOneWithoutHodInput
    subjectsTaught?: FacultySubjectUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type UserCreateOrConnectWithoutAcademicProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAcademicProfileInput, UserUncheckedCreateWithoutAcademicProfileInput>
  }

  export type InstituteCreateWithoutStudentsInput = {
    id?: string
    name: string
    code: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutInstituteInput
    departments?: DepartmentCreateNestedManyWithoutInstituteInput
  }

  export type InstituteUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    code: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutInstituteInput
    departments?: DepartmentUncheckedCreateNestedManyWithoutInstituteInput
  }

  export type InstituteCreateOrConnectWithoutStudentsInput = {
    where: InstituteWhereUniqueInput
    create: XOR<InstituteCreateWithoutStudentsInput, InstituteUncheckedCreateWithoutStudentsInput>
  }

  export type DepartmentCreateWithoutStudentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institute: InstituteCreateNestedOneWithoutDepartmentsInput
    hod?: UserCreateNestedOneWithoutHodOfInput
    members?: UserCreateNestedManyWithoutDepartmentInput
    faculty?: FacultySubjectCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    instituteId: string
    hodId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutDepartmentInput
    faculty?: FacultySubjectUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutStudentsInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutStudentsInput, DepartmentUncheckedCreateWithoutStudentsInput>
  }

  export type UserUpsertWithoutAcademicProfileInput = {
    update: XOR<UserUpdateWithoutAcademicProfileInput, UserUncheckedUpdateWithoutAcademicProfileInput>
    create: XOR<UserCreateWithoutAcademicProfileInput, UserUncheckedCreateWithoutAcademicProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAcademicProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAcademicProfileInput, UserUncheckedUpdateWithoutAcademicProfileInput>
  }

  export type UserUpdateWithoutAcademicProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    faceData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    rfidUid?: NullableStringFieldUpdateOperationsInput | string | null
    biometricTemplate?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institute?: InstituteUpdateOneRequiredWithoutUsersNestedInput
    department?: DepartmentUpdateOneWithoutMembersNestedInput
    hodOf?: DepartmentUpdateOneWithoutHodNestedInput
    subjectsTaught?: FacultySubjectUpdateManyWithoutFacultyNestedInput
  }

  export type UserUncheckedUpdateWithoutAcademicProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    faceData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    rfidUid?: NullableStringFieldUpdateOperationsInput | string | null
    biometricTemplate?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    instituteId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hodOf?: DepartmentUncheckedUpdateOneWithoutHodNestedInput
    subjectsTaught?: FacultySubjectUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type InstituteUpsertWithoutStudentsInput = {
    update: XOR<InstituteUpdateWithoutStudentsInput, InstituteUncheckedUpdateWithoutStudentsInput>
    create: XOR<InstituteCreateWithoutStudentsInput, InstituteUncheckedCreateWithoutStudentsInput>
    where?: InstituteWhereInput
  }

  export type InstituteUpdateToOneWithWhereWithoutStudentsInput = {
    where?: InstituteWhereInput
    data: XOR<InstituteUpdateWithoutStudentsInput, InstituteUncheckedUpdateWithoutStudentsInput>
  }

  export type InstituteUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutInstituteNestedInput
    departments?: DepartmentUpdateManyWithoutInstituteNestedInput
  }

  export type InstituteUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutInstituteNestedInput
    departments?: DepartmentUncheckedUpdateManyWithoutInstituteNestedInput
  }

  export type DepartmentUpsertWithoutStudentsInput = {
    update: XOR<DepartmentUpdateWithoutStudentsInput, DepartmentUncheckedUpdateWithoutStudentsInput>
    create: XOR<DepartmentCreateWithoutStudentsInput, DepartmentUncheckedCreateWithoutStudentsInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutStudentsInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutStudentsInput, DepartmentUncheckedUpdateWithoutStudentsInput>
  }

  export type DepartmentUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institute?: InstituteUpdateOneRequiredWithoutDepartmentsNestedInput
    hod?: UserUpdateOneWithoutHodOfNestedInput
    members?: UserUpdateManyWithoutDepartmentNestedInput
    faculty?: FacultySubjectUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instituteId?: StringFieldUpdateOperationsInput | string
    hodId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
    faculty?: FacultySubjectUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type UserCreateWithoutSubjectsTaughtInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: string
    faceData?: Bytes | null
    rfidUid?: string | null
    biometricTemplate?: Bytes | null
    createdAt?: Date | string
    updatedAt?: Date | string
    institute: InstituteCreateNestedOneWithoutUsersInput
    department?: DepartmentCreateNestedOneWithoutMembersInput
    hodOf?: DepartmentCreateNestedOneWithoutHodInput
    academicProfile?: StudentAcademicProfileCreateNestedOneWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutSubjectsTaughtInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: string
    faceData?: Bytes | null
    rfidUid?: string | null
    biometricTemplate?: Bytes | null
    instituteId: string
    departmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hodOf?: DepartmentUncheckedCreateNestedOneWithoutHodInput
    academicProfile?: StudentAcademicProfileUncheckedCreateNestedOneWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutSubjectsTaughtInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubjectsTaughtInput, UserUncheckedCreateWithoutSubjectsTaughtInput>
  }

  export type DepartmentCreateWithoutFacultyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institute: InstituteCreateNestedOneWithoutDepartmentsInput
    hod?: UserCreateNestedOneWithoutHodOfInput
    members?: UserCreateNestedManyWithoutDepartmentInput
    students?: StudentAcademicProfileCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutFacultyInput = {
    id?: string
    name: string
    instituteId: string
    hodId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutDepartmentInput
    students?: StudentAcademicProfileUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutFacultyInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutFacultyInput, DepartmentUncheckedCreateWithoutFacultyInput>
  }

  export type UserUpsertWithoutSubjectsTaughtInput = {
    update: XOR<UserUpdateWithoutSubjectsTaughtInput, UserUncheckedUpdateWithoutSubjectsTaughtInput>
    create: XOR<UserCreateWithoutSubjectsTaughtInput, UserUncheckedCreateWithoutSubjectsTaughtInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubjectsTaughtInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubjectsTaughtInput, UserUncheckedUpdateWithoutSubjectsTaughtInput>
  }

  export type UserUpdateWithoutSubjectsTaughtInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    faceData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    rfidUid?: NullableStringFieldUpdateOperationsInput | string | null
    biometricTemplate?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institute?: InstituteUpdateOneRequiredWithoutUsersNestedInput
    department?: DepartmentUpdateOneWithoutMembersNestedInput
    hodOf?: DepartmentUpdateOneWithoutHodNestedInput
    academicProfile?: StudentAcademicProfileUpdateOneWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutSubjectsTaughtInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    faceData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    rfidUid?: NullableStringFieldUpdateOperationsInput | string | null
    biometricTemplate?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    instituteId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hodOf?: DepartmentUncheckedUpdateOneWithoutHodNestedInput
    academicProfile?: StudentAcademicProfileUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type DepartmentUpsertWithoutFacultyInput = {
    update: XOR<DepartmentUpdateWithoutFacultyInput, DepartmentUncheckedUpdateWithoutFacultyInput>
    create: XOR<DepartmentCreateWithoutFacultyInput, DepartmentUncheckedCreateWithoutFacultyInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutFacultyInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutFacultyInput, DepartmentUncheckedUpdateWithoutFacultyInput>
  }

  export type DepartmentUpdateWithoutFacultyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institute?: InstituteUpdateOneRequiredWithoutDepartmentsNestedInput
    hod?: UserUpdateOneWithoutHodOfNestedInput
    members?: UserUpdateManyWithoutDepartmentNestedInput
    students?: StudentAcademicProfileUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutFacultyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instituteId?: StringFieldUpdateOperationsInput | string
    hodId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
    students?: StudentAcademicProfileUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type UserCreateManyInstituteInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: string
    faceData?: Bytes | null
    rfidUid?: string | null
    biometricTemplate?: Bytes | null
    departmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentCreateManyInstituteInput = {
    id?: string
    name: string
    hodId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentAcademicProfileCreateManyInstituteInput = {
    id?: string
    year: number
    semester: number
    division: string
    rollNo?: string | null
    studentId: string
    departmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutInstituteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    faceData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    rfidUid?: NullableStringFieldUpdateOperationsInput | string | null
    biometricTemplate?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutMembersNestedInput
    hodOf?: DepartmentUpdateOneWithoutHodNestedInput
    academicProfile?: StudentAcademicProfileUpdateOneWithoutStudentNestedInput
    subjectsTaught?: FacultySubjectUpdateManyWithoutFacultyNestedInput
  }

  export type UserUncheckedUpdateWithoutInstituteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    faceData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    rfidUid?: NullableStringFieldUpdateOperationsInput | string | null
    biometricTemplate?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hodOf?: DepartmentUncheckedUpdateOneWithoutHodNestedInput
    academicProfile?: StudentAcademicProfileUncheckedUpdateOneWithoutStudentNestedInput
    subjectsTaught?: FacultySubjectUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type UserUncheckedUpdateManyWithoutInstituteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    faceData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    rfidUid?: NullableStringFieldUpdateOperationsInput | string | null
    biometricTemplate?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUpdateWithoutInstituteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hod?: UserUpdateOneWithoutHodOfNestedInput
    members?: UserUpdateManyWithoutDepartmentNestedInput
    faculty?: FacultySubjectUpdateManyWithoutDepartmentNestedInput
    students?: StudentAcademicProfileUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutInstituteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hodId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
    faculty?: FacultySubjectUncheckedUpdateManyWithoutDepartmentNestedInput
    students?: StudentAcademicProfileUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutInstituteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hodId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAcademicProfileUpdateWithoutInstituteInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    division?: StringFieldUpdateOperationsInput | string
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutAcademicProfileNestedInput
    department?: DepartmentUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentAcademicProfileUncheckedUpdateWithoutInstituteInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    division?: StringFieldUpdateOperationsInput | string
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAcademicProfileUncheckedUpdateManyWithoutInstituteInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    division?: StringFieldUpdateOperationsInput | string
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultySubjectCreateManyFacultyInput = {
    id?: string
    subject: string
    departmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacultySubjectUpdateWithoutFacultyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutFacultyNestedInput
  }

  export type FacultySubjectUncheckedUpdateWithoutFacultyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultySubjectUncheckedUpdateManyWithoutFacultyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyDepartmentInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: string
    faceData?: Bytes | null
    rfidUid?: string | null
    biometricTemplate?: Bytes | null
    instituteId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacultySubjectCreateManyDepartmentInput = {
    id?: string
    subject: string
    facultyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentAcademicProfileCreateManyDepartmentInput = {
    id?: string
    year: number
    semester: number
    division: string
    rollNo?: string | null
    studentId: string
    instituteId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    faceData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    rfidUid?: NullableStringFieldUpdateOperationsInput | string | null
    biometricTemplate?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institute?: InstituteUpdateOneRequiredWithoutUsersNestedInput
    hodOf?: DepartmentUpdateOneWithoutHodNestedInput
    academicProfile?: StudentAcademicProfileUpdateOneWithoutStudentNestedInput
    subjectsTaught?: FacultySubjectUpdateManyWithoutFacultyNestedInput
  }

  export type UserUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    faceData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    rfidUid?: NullableStringFieldUpdateOperationsInput | string | null
    biometricTemplate?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    instituteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hodOf?: DepartmentUncheckedUpdateOneWithoutHodNestedInput
    academicProfile?: StudentAcademicProfileUncheckedUpdateOneWithoutStudentNestedInput
    subjectsTaught?: FacultySubjectUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    faceData?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    rfidUid?: NullableStringFieldUpdateOperationsInput | string | null
    biometricTemplate?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    instituteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultySubjectUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculty?: UserUpdateOneRequiredWithoutSubjectsTaughtNestedInput
  }

  export type FacultySubjectUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    facultyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultySubjectUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    facultyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAcademicProfileUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    division?: StringFieldUpdateOperationsInput | string
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutAcademicProfileNestedInput
    institute?: InstituteUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentAcademicProfileUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    division?: StringFieldUpdateOperationsInput | string
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    instituteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAcademicProfileUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    division?: StringFieldUpdateOperationsInput | string
    rollNo?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    instituteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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