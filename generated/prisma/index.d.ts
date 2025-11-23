
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>
/**
 * Model Ascent
 * 
 */
export type Ascent = $Result.DefaultSelection<Prisma.$AscentPayload>
/**
 * Model Crag
 * 
 */
export type Crag = $Result.DefaultSelection<Prisma.$CragPayload>
/**
 * Model Area
 * 
 */
export type Area = $Result.DefaultSelection<Prisma.$AreaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Sex: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Sex = (typeof Sex)[keyof typeof Sex]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Sex = $Enums.Sex

export const Sex: typeof $Enums.Sex

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ascent`: Exposes CRUD operations for the **Ascent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ascents
    * const ascents = await prisma.ascent.findMany()
    * ```
    */
  get ascent(): Prisma.AscentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crag`: Exposes CRUD operations for the **Crag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Crags
    * const crags = await prisma.crag.findMany()
    * ```
    */
  get crag(): Prisma.CragDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.area`: Exposes CRUD operations for the **Area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.AreaDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.0
   * Query Engine version: 0c19ccc313cf9911a90d99d2ac2eb0280c76c513
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    User: 'User',
    Profile: 'Profile',
    Route: 'Route',
    Ascent: 'Ascent',
    Crag: 'Crag',
    Area: 'Area'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "profile" | "route" | "ascent" | "crag" | "area"
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
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
      Ascent: {
        payload: Prisma.$AscentPayload<ExtArgs>
        fields: Prisma.AscentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AscentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AscentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AscentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AscentPayload>
          }
          findFirst: {
            args: Prisma.AscentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AscentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AscentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AscentPayload>
          }
          findMany: {
            args: Prisma.AscentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AscentPayload>[]
          }
          create: {
            args: Prisma.AscentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AscentPayload>
          }
          createMany: {
            args: Prisma.AscentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AscentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AscentPayload>[]
          }
          delete: {
            args: Prisma.AscentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AscentPayload>
          }
          update: {
            args: Prisma.AscentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AscentPayload>
          }
          deleteMany: {
            args: Prisma.AscentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AscentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AscentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AscentPayload>[]
          }
          upsert: {
            args: Prisma.AscentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AscentPayload>
          }
          aggregate: {
            args: Prisma.AscentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAscent>
          }
          groupBy: {
            args: Prisma.AscentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AscentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AscentCountArgs<ExtArgs>
            result: $Utils.Optional<AscentCountAggregateOutputType> | number
          }
        }
      }
      Crag: {
        payload: Prisma.$CragPayload<ExtArgs>
        fields: Prisma.CragFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CragFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CragPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CragFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CragPayload>
          }
          findFirst: {
            args: Prisma.CragFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CragPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CragFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CragPayload>
          }
          findMany: {
            args: Prisma.CragFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CragPayload>[]
          }
          create: {
            args: Prisma.CragCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CragPayload>
          }
          createMany: {
            args: Prisma.CragCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CragCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CragPayload>[]
          }
          delete: {
            args: Prisma.CragDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CragPayload>
          }
          update: {
            args: Prisma.CragUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CragPayload>
          }
          deleteMany: {
            args: Prisma.CragDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CragUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CragUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CragPayload>[]
          }
          upsert: {
            args: Prisma.CragUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CragPayload>
          }
          aggregate: {
            args: Prisma.CragAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrag>
          }
          groupBy: {
            args: Prisma.CragGroupByArgs<ExtArgs>
            result: $Utils.Optional<CragGroupByOutputType>[]
          }
          count: {
            args: Prisma.CragCountArgs<ExtArgs>
            result: $Utils.Optional<CragCountAggregateOutputType> | number
          }
        }
      }
      Area: {
        payload: Prisma.$AreaPayload<ExtArgs>
        fields: Prisma.AreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findFirst: {
            args: Prisma.AreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findMany: {
            args: Prisma.AreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          create: {
            args: Prisma.AreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          createMany: {
            args: Prisma.AreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          delete: {
            args: Prisma.AreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          update: {
            args: Prisma.AreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          deleteMany: {
            args: Prisma.AreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AreaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          upsert: {
            args: Prisma.AreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.AreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    user?: UserOmit
    profile?: ProfileOmit
    route?: RouteOmit
    ascent?: AscentOmit
    crag?: CragOmit
    area?: AreaOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ascents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ascents?: boolean | UserCountOutputTypeCountAscentsArgs
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
  export type UserCountOutputTypeCountAscentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AscentWhereInput
  }


  /**
   * Count Type RouteCountOutputType
   */

  export type RouteCountOutputType = {
    ascents: number
  }

  export type RouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ascents?: boolean | RouteCountOutputTypeCountAscentsArgs
  }

  // Custom InputTypes
  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteCountOutputType
     */
    select?: RouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountAscentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AscentWhereInput
  }


  /**
   * Count Type CragCountOutputType
   */

  export type CragCountOutputType = {
    routes: number
  }

  export type CragCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routes?: boolean | CragCountOutputTypeCountRoutesArgs
  }

  // Custom InputTypes
  /**
   * CragCountOutputType without action
   */
  export type CragCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CragCountOutputType
     */
    select?: CragCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CragCountOutputType without action
   */
  export type CragCountOutputTypeCountRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
  }


  /**
   * Count Type AreaCountOutputType
   */

  export type AreaCountOutputType = {
    crags: number
  }

  export type AreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crags?: boolean | AreaCountOutputTypeCountCragsArgs
  }

  // Custom InputTypes
  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCountOutputType
     */
    select?: AreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountCragsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CragWhereInput
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
    username: string | null
    password: string | null
    email: string | null
    role: $Enums.Role | null
    CreatedOn: Date | null
    UpdatedOn: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    role: $Enums.Role | null
    CreatedOn: Date | null
    UpdatedOn: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    role: number
    CreatedOn: number
    UpdatedOn: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
    CreatedOn?: true
    UpdatedOn?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
    CreatedOn?: true
    UpdatedOn?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
    CreatedOn?: true
    UpdatedOn?: true
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
    username: string
    password: string
    email: string
    role: $Enums.Role
    CreatedOn: Date
    UpdatedOn: Date
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
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    ascents?: boolean | User$ascentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "role" | "CreatedOn" | "UpdatedOn", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    ascents?: boolean | User$ascentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      ascents: Prisma.$AscentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      email: string
      role: $Enums.Role
      CreatedOn: Date
      UpdatedOn: Date
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
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ascents<T extends User$ascentsArgs<ExtArgs> = {}>(args?: Subset<T, User$ascentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AscentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly CreatedOn: FieldRef<"User", 'DateTime'>
    readonly UpdatedOn: FieldRef<"User", 'DateTime'>
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
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.ascents
   */
  export type User$ascentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ascent
     */
    select?: AscentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ascent
     */
    omit?: AscentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AscentInclude<ExtArgs> | null
    where?: AscentWhereInput
    orderBy?: AscentOrderByWithRelationInput | AscentOrderByWithRelationInput[]
    cursor?: AscentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AscentScalarFieldEnum | AscentScalarFieldEnum[]
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
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    age: number | null
  }

  export type ProfileSumAggregateOutputType = {
    age: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sex: $Enums.Sex | null
    age: number | null
    climbingStart: Date | null
    personalBest: string | null
    CreatedOn: Date | null
    UpdatedOn: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sex: $Enums.Sex | null
    age: number | null
    climbingStart: Date | null
    personalBest: string | null
    CreatedOn: Date | null
    UpdatedOn: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    sex: number
    age: number
    climbingStart: number
    personalBest: number
    CreatedOn: number
    UpdatedOn: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    age?: true
  }

  export type ProfileSumAggregateInputType = {
    age?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    sex?: true
    age?: true
    climbingStart?: true
    personalBest?: true
    CreatedOn?: true
    UpdatedOn?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    sex?: true
    age?: true
    climbingStart?: true
    personalBest?: true
    CreatedOn?: true
    UpdatedOn?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    sex?: true
    age?: true
    climbingStart?: true
    personalBest?: true
    CreatedOn?: true
    UpdatedOn?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    userId: string
    sex: $Enums.Sex | null
    age: number | null
    climbingStart: Date | null
    personalBest: string | null
    CreatedOn: Date
    UpdatedOn: Date
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sex?: boolean
    age?: boolean
    climbingStart?: boolean
    personalBest?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sex?: boolean
    age?: boolean
    climbingStart?: boolean
    personalBest?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sex?: boolean
    age?: boolean
    climbingStart?: boolean
    personalBest?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    sex?: boolean
    age?: boolean
    climbingStart?: boolean
    personalBest?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sex" | "age" | "climbingStart" | "personalBest" | "CreatedOn" | "UpdatedOn", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sex: $Enums.Sex | null
      age: number | null
      climbingStart: Date | null
      personalBest: string | null
      CreatedOn: Date
      UpdatedOn: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'String'>
    readonly sex: FieldRef<"Profile", 'Sex'>
    readonly age: FieldRef<"Profile", 'Int'>
    readonly climbingStart: FieldRef<"Profile", 'DateTime'>
    readonly personalBest: FieldRef<"Profile", 'String'>
    readonly CreatedOn: FieldRef<"Profile", 'DateTime'>
    readonly UpdatedOn: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteMinAggregateOutputType = {
    id: string | null
    name: string | null
    cragName: string | null
    areaName: string | null
    country: string | null
    grade: string | null
    climbingStyle: string | null
    CreatedOn: Date | null
    UpdatedOn: Date | null
  }

  export type RouteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cragName: string | null
    areaName: string | null
    country: string | null
    grade: string | null
    climbingStyle: string | null
    CreatedOn: Date | null
    UpdatedOn: Date | null
  }

  export type RouteCountAggregateOutputType = {
    id: number
    name: number
    cragName: number
    areaName: number
    country: number
    grade: number
    climbingStyle: number
    CreatedOn: number
    UpdatedOn: number
    _all: number
  }


  export type RouteMinAggregateInputType = {
    id?: true
    name?: true
    cragName?: true
    areaName?: true
    country?: true
    grade?: true
    climbingStyle?: true
    CreatedOn?: true
    UpdatedOn?: true
  }

  export type RouteMaxAggregateInputType = {
    id?: true
    name?: true
    cragName?: true
    areaName?: true
    country?: true
    grade?: true
    climbingStyle?: true
    CreatedOn?: true
    UpdatedOn?: true
  }

  export type RouteCountAggregateInputType = {
    id?: true
    name?: true
    cragName?: true
    areaName?: true
    country?: true
    grade?: true
    climbingStyle?: true
    CreatedOn?: true
    UpdatedOn?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    id: string
    name: string
    cragName: string
    areaName: string
    country: string
    grade: string
    climbingStyle: string
    CreatedOn: Date
    UpdatedOn: Date
    _count: RouteCountAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cragName?: boolean
    areaName?: boolean
    country?: boolean
    grade?: boolean
    climbingStyle?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
    crag?: boolean | CragDefaultArgs<ExtArgs>
    ascents?: boolean | Route$ascentsArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cragName?: boolean
    areaName?: boolean
    country?: boolean
    grade?: boolean
    climbingStyle?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
    crag?: boolean | CragDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cragName?: boolean
    areaName?: boolean
    country?: boolean
    grade?: boolean
    climbingStyle?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
    crag?: boolean | CragDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectScalar = {
    id?: boolean
    name?: boolean
    cragName?: boolean
    areaName?: boolean
    country?: boolean
    grade?: boolean
    climbingStyle?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
  }

  export type RouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cragName" | "areaName" | "country" | "grade" | "climbingStyle" | "CreatedOn" | "UpdatedOn", ExtArgs["result"]["route"]>
  export type RouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crag?: boolean | CragDefaultArgs<ExtArgs>
    ascents?: boolean | Route$ascentsArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crag?: boolean | CragDefaultArgs<ExtArgs>
  }
  export type RouteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crag?: boolean | CragDefaultArgs<ExtArgs>
  }

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {
      crag: Prisma.$CragPayload<ExtArgs>
      ascents: Prisma.$AscentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cragName: string
      areaName: string
      country: string
      grade: string
      climbingStyle: string
      CreatedOn: Date
      UpdatedOn: Date
    }, ExtArgs["result"]["route"]>
    composites: {}
  }

  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteFindUniqueArgs>(args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Route that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteFindFirstArgs>(args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeWithIdOnly = await prisma.route.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteFindManyArgs>(args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
     */
    create<T extends RouteCreateArgs>(args: SelectSubset<T, RouteCreateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteCreateManyArgs>(args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routes and returns the data saved in the database.
     * @param {RouteCreateManyAndReturnArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
     */
    delete<T extends RouteDeleteArgs>(args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteUpdateArgs>(args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteDeleteManyArgs>(args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteUpdateManyArgs>(args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes and returns the data updated in the database.
     * @param {RouteUpdateManyAndReturnArgs} args - Arguments to update many Routes.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.updateManyAndReturn({
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
    updateManyAndReturn<T extends RouteUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
     */
    upsert<T extends RouteUpsertArgs>(args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
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
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    crag<T extends CragDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CragDefaultArgs<ExtArgs>>): Prisma__CragClient<$Result.GetResult<Prisma.$CragPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ascents<T extends Route$ascentsArgs<ExtArgs> = {}>(args?: Subset<T, Route$ascentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AscentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Route model
   */
  interface RouteFieldRefs {
    readonly id: FieldRef<"Route", 'String'>
    readonly name: FieldRef<"Route", 'String'>
    readonly cragName: FieldRef<"Route", 'String'>
    readonly areaName: FieldRef<"Route", 'String'>
    readonly country: FieldRef<"Route", 'String'>
    readonly grade: FieldRef<"Route", 'String'>
    readonly climbingStyle: FieldRef<"Route", 'String'>
    readonly CreatedOn: FieldRef<"Route", 'DateTime'>
    readonly UpdatedOn: FieldRef<"Route", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }

  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route createManyAndReturn
   */
  export type RouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route updateManyAndReturn
   */
  export type RouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }

  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Route.ascents
   */
  export type Route$ascentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ascent
     */
    select?: AscentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ascent
     */
    omit?: AscentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AscentInclude<ExtArgs> | null
    where?: AscentWhereInput
    orderBy?: AscentOrderByWithRelationInput | AscentOrderByWithRelationInput[]
    cursor?: AscentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AscentScalarFieldEnum | AscentScalarFieldEnum[]
  }

  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
  }


  /**
   * Model Ascent
   */

  export type AggregateAscent = {
    _count: AscentCountAggregateOutputType | null
    _min: AscentMinAggregateOutputType | null
    _max: AscentMaxAggregateOutputType | null
  }

  export type AscentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    routeId: string | null
    ascentDate: Date | null
    ascentStyle: string | null
    personalOpinion: string | null
    CreatedOn: Date | null
    UpdatedOn: Date | null
  }

  export type AscentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    routeId: string | null
    ascentDate: Date | null
    ascentStyle: string | null
    personalOpinion: string | null
    CreatedOn: Date | null
    UpdatedOn: Date | null
  }

  export type AscentCountAggregateOutputType = {
    id: number
    userId: number
    routeId: number
    ascentDate: number
    ascentStyle: number
    personalOpinion: number
    CreatedOn: number
    UpdatedOn: number
    _all: number
  }


  export type AscentMinAggregateInputType = {
    id?: true
    userId?: true
    routeId?: true
    ascentDate?: true
    ascentStyle?: true
    personalOpinion?: true
    CreatedOn?: true
    UpdatedOn?: true
  }

  export type AscentMaxAggregateInputType = {
    id?: true
    userId?: true
    routeId?: true
    ascentDate?: true
    ascentStyle?: true
    personalOpinion?: true
    CreatedOn?: true
    UpdatedOn?: true
  }

  export type AscentCountAggregateInputType = {
    id?: true
    userId?: true
    routeId?: true
    ascentDate?: true
    ascentStyle?: true
    personalOpinion?: true
    CreatedOn?: true
    UpdatedOn?: true
    _all?: true
  }

  export type AscentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ascent to aggregate.
     */
    where?: AscentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ascents to fetch.
     */
    orderBy?: AscentOrderByWithRelationInput | AscentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AscentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ascents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ascents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ascents
    **/
    _count?: true | AscentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AscentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AscentMaxAggregateInputType
  }

  export type GetAscentAggregateType<T extends AscentAggregateArgs> = {
        [P in keyof T & keyof AggregateAscent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAscent[P]>
      : GetScalarType<T[P], AggregateAscent[P]>
  }




  export type AscentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AscentWhereInput
    orderBy?: AscentOrderByWithAggregationInput | AscentOrderByWithAggregationInput[]
    by: AscentScalarFieldEnum[] | AscentScalarFieldEnum
    having?: AscentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AscentCountAggregateInputType | true
    _min?: AscentMinAggregateInputType
    _max?: AscentMaxAggregateInputType
  }

  export type AscentGroupByOutputType = {
    id: string
    userId: string
    routeId: string
    ascentDate: Date
    ascentStyle: string
    personalOpinion: string
    CreatedOn: Date
    UpdatedOn: Date
    _count: AscentCountAggregateOutputType | null
    _min: AscentMinAggregateOutputType | null
    _max: AscentMaxAggregateOutputType | null
  }

  type GetAscentGroupByPayload<T extends AscentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AscentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AscentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AscentGroupByOutputType[P]>
            : GetScalarType<T[P], AscentGroupByOutputType[P]>
        }
      >
    >


  export type AscentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    routeId?: boolean
    ascentDate?: boolean
    ascentStyle?: boolean
    personalOpinion?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ascent"]>

  export type AscentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    routeId?: boolean
    ascentDate?: boolean
    ascentStyle?: boolean
    personalOpinion?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ascent"]>

  export type AscentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    routeId?: boolean
    ascentDate?: boolean
    ascentStyle?: boolean
    personalOpinion?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ascent"]>

  export type AscentSelectScalar = {
    id?: boolean
    userId?: boolean
    routeId?: boolean
    ascentDate?: boolean
    ascentStyle?: boolean
    personalOpinion?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
  }

  export type AscentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "routeId" | "ascentDate" | "ascentStyle" | "personalOpinion" | "CreatedOn" | "UpdatedOn", ExtArgs["result"]["ascent"]>
  export type AscentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }
  export type AscentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }
  export type AscentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }

  export type $AscentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ascent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      route: Prisma.$RoutePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      routeId: string
      ascentDate: Date
      ascentStyle: string
      personalOpinion: string
      CreatedOn: Date
      UpdatedOn: Date
    }, ExtArgs["result"]["ascent"]>
    composites: {}
  }

  type AscentGetPayload<S extends boolean | null | undefined | AscentDefaultArgs> = $Result.GetResult<Prisma.$AscentPayload, S>

  type AscentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AscentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AscentCountAggregateInputType | true
    }

  export interface AscentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ascent'], meta: { name: 'Ascent' } }
    /**
     * Find zero or one Ascent that matches the filter.
     * @param {AscentFindUniqueArgs} args - Arguments to find a Ascent
     * @example
     * // Get one Ascent
     * const ascent = await prisma.ascent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AscentFindUniqueArgs>(args: SelectSubset<T, AscentFindUniqueArgs<ExtArgs>>): Prisma__AscentClient<$Result.GetResult<Prisma.$AscentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ascent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AscentFindUniqueOrThrowArgs} args - Arguments to find a Ascent
     * @example
     * // Get one Ascent
     * const ascent = await prisma.ascent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AscentFindUniqueOrThrowArgs>(args: SelectSubset<T, AscentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AscentClient<$Result.GetResult<Prisma.$AscentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ascent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AscentFindFirstArgs} args - Arguments to find a Ascent
     * @example
     * // Get one Ascent
     * const ascent = await prisma.ascent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AscentFindFirstArgs>(args?: SelectSubset<T, AscentFindFirstArgs<ExtArgs>>): Prisma__AscentClient<$Result.GetResult<Prisma.$AscentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ascent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AscentFindFirstOrThrowArgs} args - Arguments to find a Ascent
     * @example
     * // Get one Ascent
     * const ascent = await prisma.ascent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AscentFindFirstOrThrowArgs>(args?: SelectSubset<T, AscentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AscentClient<$Result.GetResult<Prisma.$AscentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ascents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AscentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ascents
     * const ascents = await prisma.ascent.findMany()
     * 
     * // Get first 10 Ascents
     * const ascents = await prisma.ascent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ascentWithIdOnly = await prisma.ascent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AscentFindManyArgs>(args?: SelectSubset<T, AscentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AscentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ascent.
     * @param {AscentCreateArgs} args - Arguments to create a Ascent.
     * @example
     * // Create one Ascent
     * const Ascent = await prisma.ascent.create({
     *   data: {
     *     // ... data to create a Ascent
     *   }
     * })
     * 
     */
    create<T extends AscentCreateArgs>(args: SelectSubset<T, AscentCreateArgs<ExtArgs>>): Prisma__AscentClient<$Result.GetResult<Prisma.$AscentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ascents.
     * @param {AscentCreateManyArgs} args - Arguments to create many Ascents.
     * @example
     * // Create many Ascents
     * const ascent = await prisma.ascent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AscentCreateManyArgs>(args?: SelectSubset<T, AscentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ascents and returns the data saved in the database.
     * @param {AscentCreateManyAndReturnArgs} args - Arguments to create many Ascents.
     * @example
     * // Create many Ascents
     * const ascent = await prisma.ascent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ascents and only return the `id`
     * const ascentWithIdOnly = await prisma.ascent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AscentCreateManyAndReturnArgs>(args?: SelectSubset<T, AscentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AscentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ascent.
     * @param {AscentDeleteArgs} args - Arguments to delete one Ascent.
     * @example
     * // Delete one Ascent
     * const Ascent = await prisma.ascent.delete({
     *   where: {
     *     // ... filter to delete one Ascent
     *   }
     * })
     * 
     */
    delete<T extends AscentDeleteArgs>(args: SelectSubset<T, AscentDeleteArgs<ExtArgs>>): Prisma__AscentClient<$Result.GetResult<Prisma.$AscentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ascent.
     * @param {AscentUpdateArgs} args - Arguments to update one Ascent.
     * @example
     * // Update one Ascent
     * const ascent = await prisma.ascent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AscentUpdateArgs>(args: SelectSubset<T, AscentUpdateArgs<ExtArgs>>): Prisma__AscentClient<$Result.GetResult<Prisma.$AscentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ascents.
     * @param {AscentDeleteManyArgs} args - Arguments to filter Ascents to delete.
     * @example
     * // Delete a few Ascents
     * const { count } = await prisma.ascent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AscentDeleteManyArgs>(args?: SelectSubset<T, AscentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ascents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AscentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ascents
     * const ascent = await prisma.ascent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AscentUpdateManyArgs>(args: SelectSubset<T, AscentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ascents and returns the data updated in the database.
     * @param {AscentUpdateManyAndReturnArgs} args - Arguments to update many Ascents.
     * @example
     * // Update many Ascents
     * const ascent = await prisma.ascent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ascents and only return the `id`
     * const ascentWithIdOnly = await prisma.ascent.updateManyAndReturn({
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
    updateManyAndReturn<T extends AscentUpdateManyAndReturnArgs>(args: SelectSubset<T, AscentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AscentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ascent.
     * @param {AscentUpsertArgs} args - Arguments to update or create a Ascent.
     * @example
     * // Update or create a Ascent
     * const ascent = await prisma.ascent.upsert({
     *   create: {
     *     // ... data to create a Ascent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ascent we want to update
     *   }
     * })
     */
    upsert<T extends AscentUpsertArgs>(args: SelectSubset<T, AscentUpsertArgs<ExtArgs>>): Prisma__AscentClient<$Result.GetResult<Prisma.$AscentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ascents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AscentCountArgs} args - Arguments to filter Ascents to count.
     * @example
     * // Count the number of Ascents
     * const count = await prisma.ascent.count({
     *   where: {
     *     // ... the filter for the Ascents we want to count
     *   }
     * })
    **/
    count<T extends AscentCountArgs>(
      args?: Subset<T, AscentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AscentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ascent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AscentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AscentAggregateArgs>(args: Subset<T, AscentAggregateArgs>): Prisma.PrismaPromise<GetAscentAggregateType<T>>

    /**
     * Group by Ascent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AscentGroupByArgs} args - Group by arguments.
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
      T extends AscentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AscentGroupByArgs['orderBy'] }
        : { orderBy?: AscentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AscentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAscentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ascent model
   */
  readonly fields: AscentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ascent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AscentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ascent model
   */
  interface AscentFieldRefs {
    readonly id: FieldRef<"Ascent", 'String'>
    readonly userId: FieldRef<"Ascent", 'String'>
    readonly routeId: FieldRef<"Ascent", 'String'>
    readonly ascentDate: FieldRef<"Ascent", 'DateTime'>
    readonly ascentStyle: FieldRef<"Ascent", 'String'>
    readonly personalOpinion: FieldRef<"Ascent", 'String'>
    readonly CreatedOn: FieldRef<"Ascent", 'DateTime'>
    readonly UpdatedOn: FieldRef<"Ascent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ascent findUnique
   */
  export type AscentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ascent
     */
    select?: AscentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ascent
     */
    omit?: AscentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AscentInclude<ExtArgs> | null
    /**
     * Filter, which Ascent to fetch.
     */
    where: AscentWhereUniqueInput
  }

  /**
   * Ascent findUniqueOrThrow
   */
  export type AscentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ascent
     */
    select?: AscentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ascent
     */
    omit?: AscentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AscentInclude<ExtArgs> | null
    /**
     * Filter, which Ascent to fetch.
     */
    where: AscentWhereUniqueInput
  }

  /**
   * Ascent findFirst
   */
  export type AscentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ascent
     */
    select?: AscentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ascent
     */
    omit?: AscentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AscentInclude<ExtArgs> | null
    /**
     * Filter, which Ascent to fetch.
     */
    where?: AscentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ascents to fetch.
     */
    orderBy?: AscentOrderByWithRelationInput | AscentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ascents.
     */
    cursor?: AscentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ascents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ascents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ascents.
     */
    distinct?: AscentScalarFieldEnum | AscentScalarFieldEnum[]
  }

  /**
   * Ascent findFirstOrThrow
   */
  export type AscentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ascent
     */
    select?: AscentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ascent
     */
    omit?: AscentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AscentInclude<ExtArgs> | null
    /**
     * Filter, which Ascent to fetch.
     */
    where?: AscentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ascents to fetch.
     */
    orderBy?: AscentOrderByWithRelationInput | AscentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ascents.
     */
    cursor?: AscentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ascents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ascents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ascents.
     */
    distinct?: AscentScalarFieldEnum | AscentScalarFieldEnum[]
  }

  /**
   * Ascent findMany
   */
  export type AscentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ascent
     */
    select?: AscentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ascent
     */
    omit?: AscentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AscentInclude<ExtArgs> | null
    /**
     * Filter, which Ascents to fetch.
     */
    where?: AscentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ascents to fetch.
     */
    orderBy?: AscentOrderByWithRelationInput | AscentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ascents.
     */
    cursor?: AscentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ascents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ascents.
     */
    skip?: number
    distinct?: AscentScalarFieldEnum | AscentScalarFieldEnum[]
  }

  /**
   * Ascent create
   */
  export type AscentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ascent
     */
    select?: AscentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ascent
     */
    omit?: AscentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AscentInclude<ExtArgs> | null
    /**
     * The data needed to create a Ascent.
     */
    data: XOR<AscentCreateInput, AscentUncheckedCreateInput>
  }

  /**
   * Ascent createMany
   */
  export type AscentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ascents.
     */
    data: AscentCreateManyInput | AscentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ascent createManyAndReturn
   */
  export type AscentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ascent
     */
    select?: AscentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ascent
     */
    omit?: AscentOmit<ExtArgs> | null
    /**
     * The data used to create many Ascents.
     */
    data: AscentCreateManyInput | AscentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AscentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ascent update
   */
  export type AscentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ascent
     */
    select?: AscentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ascent
     */
    omit?: AscentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AscentInclude<ExtArgs> | null
    /**
     * The data needed to update a Ascent.
     */
    data: XOR<AscentUpdateInput, AscentUncheckedUpdateInput>
    /**
     * Choose, which Ascent to update.
     */
    where: AscentWhereUniqueInput
  }

  /**
   * Ascent updateMany
   */
  export type AscentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ascents.
     */
    data: XOR<AscentUpdateManyMutationInput, AscentUncheckedUpdateManyInput>
    /**
     * Filter which Ascents to update
     */
    where?: AscentWhereInput
    /**
     * Limit how many Ascents to update.
     */
    limit?: number
  }

  /**
   * Ascent updateManyAndReturn
   */
  export type AscentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ascent
     */
    select?: AscentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ascent
     */
    omit?: AscentOmit<ExtArgs> | null
    /**
     * The data used to update Ascents.
     */
    data: XOR<AscentUpdateManyMutationInput, AscentUncheckedUpdateManyInput>
    /**
     * Filter which Ascents to update
     */
    where?: AscentWhereInput
    /**
     * Limit how many Ascents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AscentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ascent upsert
   */
  export type AscentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ascent
     */
    select?: AscentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ascent
     */
    omit?: AscentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AscentInclude<ExtArgs> | null
    /**
     * The filter to search for the Ascent to update in case it exists.
     */
    where: AscentWhereUniqueInput
    /**
     * In case the Ascent found by the `where` argument doesn't exist, create a new Ascent with this data.
     */
    create: XOR<AscentCreateInput, AscentUncheckedCreateInput>
    /**
     * In case the Ascent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AscentUpdateInput, AscentUncheckedUpdateInput>
  }

  /**
   * Ascent delete
   */
  export type AscentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ascent
     */
    select?: AscentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ascent
     */
    omit?: AscentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AscentInclude<ExtArgs> | null
    /**
     * Filter which Ascent to delete.
     */
    where: AscentWhereUniqueInput
  }

  /**
   * Ascent deleteMany
   */
  export type AscentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ascents to delete
     */
    where?: AscentWhereInput
    /**
     * Limit how many Ascents to delete.
     */
    limit?: number
  }

  /**
   * Ascent without action
   */
  export type AscentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ascent
     */
    select?: AscentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ascent
     */
    omit?: AscentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AscentInclude<ExtArgs> | null
  }


  /**
   * Model Crag
   */

  export type AggregateCrag = {
    _count: CragCountAggregateOutputType | null
    _min: CragMinAggregateOutputType | null
    _max: CragMaxAggregateOutputType | null
  }

  export type CragMinAggregateOutputType = {
    name: string | null
    areaName: string | null
    country: string | null
    minGrade: string | null
    maxGrade: string | null
    CreatedOn: Date | null
    UpdatedOn: Date | null
  }

  export type CragMaxAggregateOutputType = {
    name: string | null
    areaName: string | null
    country: string | null
    minGrade: string | null
    maxGrade: string | null
    CreatedOn: Date | null
    UpdatedOn: Date | null
  }

  export type CragCountAggregateOutputType = {
    name: number
    areaName: number
    country: number
    minGrade: number
    maxGrade: number
    CreatedOn: number
    UpdatedOn: number
    _all: number
  }


  export type CragMinAggregateInputType = {
    name?: true
    areaName?: true
    country?: true
    minGrade?: true
    maxGrade?: true
    CreatedOn?: true
    UpdatedOn?: true
  }

  export type CragMaxAggregateInputType = {
    name?: true
    areaName?: true
    country?: true
    minGrade?: true
    maxGrade?: true
    CreatedOn?: true
    UpdatedOn?: true
  }

  export type CragCountAggregateInputType = {
    name?: true
    areaName?: true
    country?: true
    minGrade?: true
    maxGrade?: true
    CreatedOn?: true
    UpdatedOn?: true
    _all?: true
  }

  export type CragAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crag to aggregate.
     */
    where?: CragWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crags to fetch.
     */
    orderBy?: CragOrderByWithRelationInput | CragOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CragWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Crags
    **/
    _count?: true | CragCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CragMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CragMaxAggregateInputType
  }

  export type GetCragAggregateType<T extends CragAggregateArgs> = {
        [P in keyof T & keyof AggregateCrag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrag[P]>
      : GetScalarType<T[P], AggregateCrag[P]>
  }




  export type CragGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CragWhereInput
    orderBy?: CragOrderByWithAggregationInput | CragOrderByWithAggregationInput[]
    by: CragScalarFieldEnum[] | CragScalarFieldEnum
    having?: CragScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CragCountAggregateInputType | true
    _min?: CragMinAggregateInputType
    _max?: CragMaxAggregateInputType
  }

  export type CragGroupByOutputType = {
    name: string
    areaName: string
    country: string
    minGrade: string
    maxGrade: string
    CreatedOn: Date
    UpdatedOn: Date
    _count: CragCountAggregateOutputType | null
    _min: CragMinAggregateOutputType | null
    _max: CragMaxAggregateOutputType | null
  }

  type GetCragGroupByPayload<T extends CragGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CragGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CragGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CragGroupByOutputType[P]>
            : GetScalarType<T[P], CragGroupByOutputType[P]>
        }
      >
    >


  export type CragSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    areaName?: boolean
    country?: boolean
    minGrade?: boolean
    maxGrade?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
    routes?: boolean | Crag$routesArgs<ExtArgs>
    _count?: boolean | CragCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crag"]>

  export type CragSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    areaName?: boolean
    country?: boolean
    minGrade?: boolean
    maxGrade?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crag"]>

  export type CragSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    areaName?: boolean
    country?: boolean
    minGrade?: boolean
    maxGrade?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crag"]>

  export type CragSelectScalar = {
    name?: boolean
    areaName?: boolean
    country?: boolean
    minGrade?: boolean
    maxGrade?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
  }

  export type CragOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "areaName" | "country" | "minGrade" | "maxGrade" | "CreatedOn" | "UpdatedOn", ExtArgs["result"]["crag"]>
  export type CragInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
    routes?: boolean | Crag$routesArgs<ExtArgs>
    _count?: boolean | CragCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CragIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }
  export type CragIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }

  export type $CragPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Crag"
    objects: {
      area: Prisma.$AreaPayload<ExtArgs>
      routes: Prisma.$RoutePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      areaName: string
      country: string
      minGrade: string
      maxGrade: string
      CreatedOn: Date
      UpdatedOn: Date
    }, ExtArgs["result"]["crag"]>
    composites: {}
  }

  type CragGetPayload<S extends boolean | null | undefined | CragDefaultArgs> = $Result.GetResult<Prisma.$CragPayload, S>

  type CragCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CragFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CragCountAggregateInputType | true
    }

  export interface CragDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Crag'], meta: { name: 'Crag' } }
    /**
     * Find zero or one Crag that matches the filter.
     * @param {CragFindUniqueArgs} args - Arguments to find a Crag
     * @example
     * // Get one Crag
     * const crag = await prisma.crag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CragFindUniqueArgs>(args: SelectSubset<T, CragFindUniqueArgs<ExtArgs>>): Prisma__CragClient<$Result.GetResult<Prisma.$CragPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Crag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CragFindUniqueOrThrowArgs} args - Arguments to find a Crag
     * @example
     * // Get one Crag
     * const crag = await prisma.crag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CragFindUniqueOrThrowArgs>(args: SelectSubset<T, CragFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CragClient<$Result.GetResult<Prisma.$CragPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CragFindFirstArgs} args - Arguments to find a Crag
     * @example
     * // Get one Crag
     * const crag = await prisma.crag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CragFindFirstArgs>(args?: SelectSubset<T, CragFindFirstArgs<ExtArgs>>): Prisma__CragClient<$Result.GetResult<Prisma.$CragPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CragFindFirstOrThrowArgs} args - Arguments to find a Crag
     * @example
     * // Get one Crag
     * const crag = await prisma.crag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CragFindFirstOrThrowArgs>(args?: SelectSubset<T, CragFindFirstOrThrowArgs<ExtArgs>>): Prisma__CragClient<$Result.GetResult<Prisma.$CragPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Crags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CragFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Crags
     * const crags = await prisma.crag.findMany()
     * 
     * // Get first 10 Crags
     * const crags = await prisma.crag.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const cragWithNameOnly = await prisma.crag.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends CragFindManyArgs>(args?: SelectSubset<T, CragFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CragPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Crag.
     * @param {CragCreateArgs} args - Arguments to create a Crag.
     * @example
     * // Create one Crag
     * const Crag = await prisma.crag.create({
     *   data: {
     *     // ... data to create a Crag
     *   }
     * })
     * 
     */
    create<T extends CragCreateArgs>(args: SelectSubset<T, CragCreateArgs<ExtArgs>>): Prisma__CragClient<$Result.GetResult<Prisma.$CragPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Crags.
     * @param {CragCreateManyArgs} args - Arguments to create many Crags.
     * @example
     * // Create many Crags
     * const crag = await prisma.crag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CragCreateManyArgs>(args?: SelectSubset<T, CragCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Crags and returns the data saved in the database.
     * @param {CragCreateManyAndReturnArgs} args - Arguments to create many Crags.
     * @example
     * // Create many Crags
     * const crag = await prisma.crag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Crags and only return the `name`
     * const cragWithNameOnly = await prisma.crag.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CragCreateManyAndReturnArgs>(args?: SelectSubset<T, CragCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CragPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Crag.
     * @param {CragDeleteArgs} args - Arguments to delete one Crag.
     * @example
     * // Delete one Crag
     * const Crag = await prisma.crag.delete({
     *   where: {
     *     // ... filter to delete one Crag
     *   }
     * })
     * 
     */
    delete<T extends CragDeleteArgs>(args: SelectSubset<T, CragDeleteArgs<ExtArgs>>): Prisma__CragClient<$Result.GetResult<Prisma.$CragPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Crag.
     * @param {CragUpdateArgs} args - Arguments to update one Crag.
     * @example
     * // Update one Crag
     * const crag = await prisma.crag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CragUpdateArgs>(args: SelectSubset<T, CragUpdateArgs<ExtArgs>>): Prisma__CragClient<$Result.GetResult<Prisma.$CragPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Crags.
     * @param {CragDeleteManyArgs} args - Arguments to filter Crags to delete.
     * @example
     * // Delete a few Crags
     * const { count } = await prisma.crag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CragDeleteManyArgs>(args?: SelectSubset<T, CragDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CragUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Crags
     * const crag = await prisma.crag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CragUpdateManyArgs>(args: SelectSubset<T, CragUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crags and returns the data updated in the database.
     * @param {CragUpdateManyAndReturnArgs} args - Arguments to update many Crags.
     * @example
     * // Update many Crags
     * const crag = await prisma.crag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Crags and only return the `name`
     * const cragWithNameOnly = await prisma.crag.updateManyAndReturn({
     *   select: { name: true },
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
    updateManyAndReturn<T extends CragUpdateManyAndReturnArgs>(args: SelectSubset<T, CragUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CragPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Crag.
     * @param {CragUpsertArgs} args - Arguments to update or create a Crag.
     * @example
     * // Update or create a Crag
     * const crag = await prisma.crag.upsert({
     *   create: {
     *     // ... data to create a Crag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Crag we want to update
     *   }
     * })
     */
    upsert<T extends CragUpsertArgs>(args: SelectSubset<T, CragUpsertArgs<ExtArgs>>): Prisma__CragClient<$Result.GetResult<Prisma.$CragPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Crags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CragCountArgs} args - Arguments to filter Crags to count.
     * @example
     * // Count the number of Crags
     * const count = await prisma.crag.count({
     *   where: {
     *     // ... the filter for the Crags we want to count
     *   }
     * })
    **/
    count<T extends CragCountArgs>(
      args?: Subset<T, CragCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CragCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Crag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CragAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CragAggregateArgs>(args: Subset<T, CragAggregateArgs>): Prisma.PrismaPromise<GetCragAggregateType<T>>

    /**
     * Group by Crag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CragGroupByArgs} args - Group by arguments.
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
      T extends CragGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CragGroupByArgs['orderBy'] }
        : { orderBy?: CragGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CragGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCragGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Crag model
   */
  readonly fields: CragFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Crag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CragClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    area<T extends AreaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaDefaultArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    routes<T extends Crag$routesArgs<ExtArgs> = {}>(args?: Subset<T, Crag$routesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Crag model
   */
  interface CragFieldRefs {
    readonly name: FieldRef<"Crag", 'String'>
    readonly areaName: FieldRef<"Crag", 'String'>
    readonly country: FieldRef<"Crag", 'String'>
    readonly minGrade: FieldRef<"Crag", 'String'>
    readonly maxGrade: FieldRef<"Crag", 'String'>
    readonly CreatedOn: FieldRef<"Crag", 'DateTime'>
    readonly UpdatedOn: FieldRef<"Crag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Crag findUnique
   */
  export type CragFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crag
     */
    select?: CragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crag
     */
    omit?: CragOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CragInclude<ExtArgs> | null
    /**
     * Filter, which Crag to fetch.
     */
    where: CragWhereUniqueInput
  }

  /**
   * Crag findUniqueOrThrow
   */
  export type CragFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crag
     */
    select?: CragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crag
     */
    omit?: CragOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CragInclude<ExtArgs> | null
    /**
     * Filter, which Crag to fetch.
     */
    where: CragWhereUniqueInput
  }

  /**
   * Crag findFirst
   */
  export type CragFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crag
     */
    select?: CragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crag
     */
    omit?: CragOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CragInclude<ExtArgs> | null
    /**
     * Filter, which Crag to fetch.
     */
    where?: CragWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crags to fetch.
     */
    orderBy?: CragOrderByWithRelationInput | CragOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crags.
     */
    cursor?: CragWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crags.
     */
    distinct?: CragScalarFieldEnum | CragScalarFieldEnum[]
  }

  /**
   * Crag findFirstOrThrow
   */
  export type CragFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crag
     */
    select?: CragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crag
     */
    omit?: CragOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CragInclude<ExtArgs> | null
    /**
     * Filter, which Crag to fetch.
     */
    where?: CragWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crags to fetch.
     */
    orderBy?: CragOrderByWithRelationInput | CragOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crags.
     */
    cursor?: CragWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crags.
     */
    distinct?: CragScalarFieldEnum | CragScalarFieldEnum[]
  }

  /**
   * Crag findMany
   */
  export type CragFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crag
     */
    select?: CragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crag
     */
    omit?: CragOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CragInclude<ExtArgs> | null
    /**
     * Filter, which Crags to fetch.
     */
    where?: CragWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crags to fetch.
     */
    orderBy?: CragOrderByWithRelationInput | CragOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Crags.
     */
    cursor?: CragWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crags.
     */
    skip?: number
    distinct?: CragScalarFieldEnum | CragScalarFieldEnum[]
  }

  /**
   * Crag create
   */
  export type CragCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crag
     */
    select?: CragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crag
     */
    omit?: CragOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CragInclude<ExtArgs> | null
    /**
     * The data needed to create a Crag.
     */
    data: XOR<CragCreateInput, CragUncheckedCreateInput>
  }

  /**
   * Crag createMany
   */
  export type CragCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Crags.
     */
    data: CragCreateManyInput | CragCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Crag createManyAndReturn
   */
  export type CragCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crag
     */
    select?: CragSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crag
     */
    omit?: CragOmit<ExtArgs> | null
    /**
     * The data used to create many Crags.
     */
    data: CragCreateManyInput | CragCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CragIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Crag update
   */
  export type CragUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crag
     */
    select?: CragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crag
     */
    omit?: CragOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CragInclude<ExtArgs> | null
    /**
     * The data needed to update a Crag.
     */
    data: XOR<CragUpdateInput, CragUncheckedUpdateInput>
    /**
     * Choose, which Crag to update.
     */
    where: CragWhereUniqueInput
  }

  /**
   * Crag updateMany
   */
  export type CragUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Crags.
     */
    data: XOR<CragUpdateManyMutationInput, CragUncheckedUpdateManyInput>
    /**
     * Filter which Crags to update
     */
    where?: CragWhereInput
    /**
     * Limit how many Crags to update.
     */
    limit?: number
  }

  /**
   * Crag updateManyAndReturn
   */
  export type CragUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crag
     */
    select?: CragSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crag
     */
    omit?: CragOmit<ExtArgs> | null
    /**
     * The data used to update Crags.
     */
    data: XOR<CragUpdateManyMutationInput, CragUncheckedUpdateManyInput>
    /**
     * Filter which Crags to update
     */
    where?: CragWhereInput
    /**
     * Limit how many Crags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CragIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Crag upsert
   */
  export type CragUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crag
     */
    select?: CragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crag
     */
    omit?: CragOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CragInclude<ExtArgs> | null
    /**
     * The filter to search for the Crag to update in case it exists.
     */
    where: CragWhereUniqueInput
    /**
     * In case the Crag found by the `where` argument doesn't exist, create a new Crag with this data.
     */
    create: XOR<CragCreateInput, CragUncheckedCreateInput>
    /**
     * In case the Crag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CragUpdateInput, CragUncheckedUpdateInput>
  }

  /**
   * Crag delete
   */
  export type CragDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crag
     */
    select?: CragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crag
     */
    omit?: CragOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CragInclude<ExtArgs> | null
    /**
     * Filter which Crag to delete.
     */
    where: CragWhereUniqueInput
  }

  /**
   * Crag deleteMany
   */
  export type CragDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crags to delete
     */
    where?: CragWhereInput
    /**
     * Limit how many Crags to delete.
     */
    limit?: number
  }

  /**
   * Crag.routes
   */
  export type Crag$routesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    cursor?: RouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Crag without action
   */
  export type CragDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crag
     */
    select?: CragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crag
     */
    omit?: CragOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CragInclude<ExtArgs> | null
  }


  /**
   * Model Area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaMinAggregateOutputType = {
    name: string | null
    country: string | null
    rockMaterial: string | null
    minGrade: string | null
    maxGrade: string | null
    CreatedOn: Date | null
    UpdatedOn: Date | null
  }

  export type AreaMaxAggregateOutputType = {
    name: string | null
    country: string | null
    rockMaterial: string | null
    minGrade: string | null
    maxGrade: string | null
    CreatedOn: Date | null
    UpdatedOn: Date | null
  }

  export type AreaCountAggregateOutputType = {
    name: number
    country: number
    rockMaterial: number
    minGrade: number
    maxGrade: number
    CreatedOn: number
    UpdatedOn: number
    _all: number
  }


  export type AreaMinAggregateInputType = {
    name?: true
    country?: true
    rockMaterial?: true
    minGrade?: true
    maxGrade?: true
    CreatedOn?: true
    UpdatedOn?: true
  }

  export type AreaMaxAggregateInputType = {
    name?: true
    country?: true
    rockMaterial?: true
    minGrade?: true
    maxGrade?: true
    CreatedOn?: true
    UpdatedOn?: true
  }

  export type AreaCountAggregateInputType = {
    name?: true
    country?: true
    rockMaterial?: true
    minGrade?: true
    maxGrade?: true
    CreatedOn?: true
    UpdatedOn?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Area to aggregate.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type AreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithAggregationInput | AreaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: AreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    name: string
    country: string
    rockMaterial: string
    minGrade: string
    maxGrade: string
    CreatedOn: Date
    UpdatedOn: Date
    _count: AreaCountAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends AreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type AreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    country?: boolean
    rockMaterial?: boolean
    minGrade?: boolean
    maxGrade?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
    crags?: boolean | Area$cragsArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    country?: boolean
    rockMaterial?: boolean
    minGrade?: boolean
    maxGrade?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
  }, ExtArgs["result"]["area"]>

  export type AreaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    country?: boolean
    rockMaterial?: boolean
    minGrade?: boolean
    maxGrade?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
  }, ExtArgs["result"]["area"]>

  export type AreaSelectScalar = {
    name?: boolean
    country?: boolean
    rockMaterial?: boolean
    minGrade?: boolean
    maxGrade?: boolean
    CreatedOn?: boolean
    UpdatedOn?: boolean
  }

  export type AreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "country" | "rockMaterial" | "minGrade" | "maxGrade" | "CreatedOn" | "UpdatedOn", ExtArgs["result"]["area"]>
  export type AreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crags?: boolean | Area$cragsArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AreaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AreaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Area"
    objects: {
      crags: Prisma.$CragPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      country: string
      rockMaterial: string
      minGrade: string
      maxGrade: string
      CreatedOn: Date
      UpdatedOn: Date
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type AreaGetPayload<S extends boolean | null | undefined | AreaDefaultArgs> = $Result.GetResult<Prisma.$AreaPayload, S>

  type AreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface AreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Area'], meta: { name: 'Area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {AreaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaFindUniqueArgs>(args: SelectSubset<T, AreaFindUniqueArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AreaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaFindFirstArgs>(args?: SelectSubset<T, AreaFindFirstArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const areaWithNameOnly = await prisma.area.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends AreaFindManyArgs>(args?: SelectSubset<T, AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Area.
     * @param {AreaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends AreaCreateArgs>(args: SelectSubset<T, AreaCreateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Areas.
     * @param {AreaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaCreateManyArgs>(args?: SelectSubset<T, AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Areas and returns the data saved in the database.
     * @param {AreaCreateManyAndReturnArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Areas and only return the `name`
     * const areaWithNameOnly = await prisma.area.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AreaCreateManyAndReturnArgs>(args?: SelectSubset<T, AreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Area.
     * @param {AreaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends AreaDeleteArgs>(args: SelectSubset<T, AreaDeleteArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Area.
     * @param {AreaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaUpdateArgs>(args: SelectSubset<T, AreaUpdateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Areas.
     * @param {AreaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaDeleteManyArgs>(args?: SelectSubset<T, AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaUpdateManyArgs>(args: SelectSubset<T, AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas and returns the data updated in the database.
     * @param {AreaUpdateManyAndReturnArgs} args - Arguments to update many Areas.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Areas and only return the `name`
     * const areaWithNameOnly = await prisma.area.updateManyAndReturn({
     *   select: { name: true },
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
    updateManyAndReturn<T extends AreaUpdateManyAndReturnArgs>(args: SelectSubset<T, AreaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Area.
     * @param {AreaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends AreaUpsertArgs>(args: SelectSubset<T, AreaUpsertArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends AreaCountArgs>(
      args?: Subset<T, AreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaGroupByArgs} args - Group by arguments.
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
      T extends AreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaGroupByArgs['orderBy'] }
        : { orderBy?: AreaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Area model
   */
  readonly fields: AreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    crags<T extends Area$cragsArgs<ExtArgs> = {}>(args?: Subset<T, Area$cragsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CragPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Area model
   */
  interface AreaFieldRefs {
    readonly name: FieldRef<"Area", 'String'>
    readonly country: FieldRef<"Area", 'String'>
    readonly rockMaterial: FieldRef<"Area", 'String'>
    readonly minGrade: FieldRef<"Area", 'String'>
    readonly maxGrade: FieldRef<"Area", 'String'>
    readonly CreatedOn: FieldRef<"Area", 'DateTime'>
    readonly UpdatedOn: FieldRef<"Area", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Area findUnique
   */
  export type AreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findUniqueOrThrow
   */
  export type AreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findFirst
   */
  export type AreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findFirstOrThrow
   */
  export type AreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findMany
   */
  export type AreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Areas to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area create
   */
  export type AreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to create a Area.
     */
    data: XOR<AreaCreateInput, AreaUncheckedCreateInput>
  }

  /**
   * Area createMany
   */
  export type AreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Area createManyAndReturn
   */
  export type AreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Area update
   */
  export type AreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to update a Area.
     */
    data: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
    /**
     * Choose, which Area to update.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area updateMany
   */
  export type AreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to update.
     */
    limit?: number
  }

  /**
   * Area updateManyAndReturn
   */
  export type AreaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to update.
     */
    limit?: number
  }

  /**
   * Area upsert
   */
  export type AreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The filter to search for the Area to update in case it exists.
     */
    where: AreaWhereUniqueInput
    /**
     * In case the Area found by the `where` argument doesn't exist, create a new Area with this data.
     */
    create: XOR<AreaCreateInput, AreaUncheckedCreateInput>
    /**
     * In case the Area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
  }

  /**
   * Area delete
   */
  export type AreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter which Area to delete.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area deleteMany
   */
  export type AreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Areas to delete
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to delete.
     */
    limit?: number
  }

  /**
   * Area.crags
   */
  export type Area$cragsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crag
     */
    select?: CragSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crag
     */
    omit?: CragOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CragInclude<ExtArgs> | null
    where?: CragWhereInput
    orderBy?: CragOrderByWithRelationInput | CragOrderByWithRelationInput[]
    cursor?: CragWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CragScalarFieldEnum | CragScalarFieldEnum[]
  }

  /**
   * Area without action
   */
  export type AreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
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
    username: 'username',
    password: 'password',
    email: 'email',
    role: 'role',
    CreatedOn: 'CreatedOn',
    UpdatedOn: 'UpdatedOn'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sex: 'sex',
    age: 'age',
    climbingStart: 'climbingStart',
    personalBest: 'personalBest',
    CreatedOn: 'CreatedOn',
    UpdatedOn: 'UpdatedOn'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const RouteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cragName: 'cragName',
    areaName: 'areaName',
    country: 'country',
    grade: 'grade',
    climbingStyle: 'climbingStyle',
    CreatedOn: 'CreatedOn',
    UpdatedOn: 'UpdatedOn'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const AscentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    routeId: 'routeId',
    ascentDate: 'ascentDate',
    ascentStyle: 'ascentStyle',
    personalOpinion: 'personalOpinion',
    CreatedOn: 'CreatedOn',
    UpdatedOn: 'UpdatedOn'
  };

  export type AscentScalarFieldEnum = (typeof AscentScalarFieldEnum)[keyof typeof AscentScalarFieldEnum]


  export const CragScalarFieldEnum: {
    name: 'name',
    areaName: 'areaName',
    country: 'country',
    minGrade: 'minGrade',
    maxGrade: 'maxGrade',
    CreatedOn: 'CreatedOn',
    UpdatedOn: 'UpdatedOn'
  };

  export type CragScalarFieldEnum = (typeof CragScalarFieldEnum)[keyof typeof CragScalarFieldEnum]


  export const AreaScalarFieldEnum: {
    name: 'name',
    country: 'country',
    rockMaterial: 'rockMaterial',
    minGrade: 'minGrade',
    maxGrade: 'maxGrade',
    CreatedOn: 'CreatedOn',
    UpdatedOn: 'UpdatedOn'
  };

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Sex'
   */
  export type EnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex'>
    


  /**
   * Reference to a field of type 'Sex[]'
   */
  export type ListEnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    CreatedOn?: DateTimeFilter<"User"> | Date | string
    UpdatedOn?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    ascents?: AscentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    ascents?: AscentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    CreatedOn?: DateTimeFilter<"User"> | Date | string
    UpdatedOn?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    ascents?: AscentListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    CreatedOn?: DateTimeWithAggregatesFilter<"User"> | Date | string
    UpdatedOn?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    userId?: StringFilter<"Profile"> | string
    sex?: EnumSexNullableFilter<"Profile"> | $Enums.Sex | null
    age?: IntNullableFilter<"Profile"> | number | null
    climbingStart?: DateTimeNullableFilter<"Profile"> | Date | string | null
    personalBest?: StringNullableFilter<"Profile"> | string | null
    CreatedOn?: DateTimeFilter<"Profile"> | Date | string
    UpdatedOn?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sex?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    climbingStart?: SortOrderInput | SortOrder
    personalBest?: SortOrderInput | SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    sex?: EnumSexNullableFilter<"Profile"> | $Enums.Sex | null
    age?: IntNullableFilter<"Profile"> | number | null
    climbingStart?: DateTimeNullableFilter<"Profile"> | Date | string | null
    personalBest?: StringNullableFilter<"Profile"> | string | null
    CreatedOn?: DateTimeFilter<"Profile"> | Date | string
    UpdatedOn?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sex?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    climbingStart?: SortOrderInput | SortOrder
    personalBest?: SortOrderInput | SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    userId?: StringWithAggregatesFilter<"Profile"> | string
    sex?: EnumSexNullableWithAggregatesFilter<"Profile"> | $Enums.Sex | null
    age?: IntNullableWithAggregatesFilter<"Profile"> | number | null
    climbingStart?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    personalBest?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    CreatedOn?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    UpdatedOn?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    id?: StringFilter<"Route"> | string
    name?: StringFilter<"Route"> | string
    cragName?: StringFilter<"Route"> | string
    areaName?: StringFilter<"Route"> | string
    country?: StringFilter<"Route"> | string
    grade?: StringFilter<"Route"> | string
    climbingStyle?: StringFilter<"Route"> | string
    CreatedOn?: DateTimeFilter<"Route"> | Date | string
    UpdatedOn?: DateTimeFilter<"Route"> | Date | string
    crag?: XOR<CragScalarRelationFilter, CragWhereInput>
    ascents?: AscentListRelationFilter
  }

  export type RouteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cragName?: SortOrder
    areaName?: SortOrder
    country?: SortOrder
    grade?: SortOrder
    climbingStyle?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
    crag?: CragOrderByWithRelationInput
    ascents?: AscentOrderByRelationAggregateInput
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    name?: StringFilter<"Route"> | string
    cragName?: StringFilter<"Route"> | string
    areaName?: StringFilter<"Route"> | string
    country?: StringFilter<"Route"> | string
    grade?: StringFilter<"Route"> | string
    climbingStyle?: StringFilter<"Route"> | string
    CreatedOn?: DateTimeFilter<"Route"> | Date | string
    UpdatedOn?: DateTimeFilter<"Route"> | Date | string
    crag?: XOR<CragScalarRelationFilter, CragWhereInput>
    ascents?: AscentListRelationFilter
  }, "id">

  export type RouteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cragName?: SortOrder
    areaName?: SortOrder
    country?: SortOrder
    grade?: SortOrder
    climbingStyle?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
    _count?: RouteCountOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Route"> | string
    name?: StringWithAggregatesFilter<"Route"> | string
    cragName?: StringWithAggregatesFilter<"Route"> | string
    areaName?: StringWithAggregatesFilter<"Route"> | string
    country?: StringWithAggregatesFilter<"Route"> | string
    grade?: StringWithAggregatesFilter<"Route"> | string
    climbingStyle?: StringWithAggregatesFilter<"Route"> | string
    CreatedOn?: DateTimeWithAggregatesFilter<"Route"> | Date | string
    UpdatedOn?: DateTimeWithAggregatesFilter<"Route"> | Date | string
  }

  export type AscentWhereInput = {
    AND?: AscentWhereInput | AscentWhereInput[]
    OR?: AscentWhereInput[]
    NOT?: AscentWhereInput | AscentWhereInput[]
    id?: StringFilter<"Ascent"> | string
    userId?: StringFilter<"Ascent"> | string
    routeId?: StringFilter<"Ascent"> | string
    ascentDate?: DateTimeFilter<"Ascent"> | Date | string
    ascentStyle?: StringFilter<"Ascent"> | string
    personalOpinion?: StringFilter<"Ascent"> | string
    CreatedOn?: DateTimeFilter<"Ascent"> | Date | string
    UpdatedOn?: DateTimeFilter<"Ascent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
  }

  export type AscentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    routeId?: SortOrder
    ascentDate?: SortOrder
    ascentStyle?: SortOrder
    personalOpinion?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
    user?: UserOrderByWithRelationInput
    route?: RouteOrderByWithRelationInput
  }

  export type AscentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AscentWhereInput | AscentWhereInput[]
    OR?: AscentWhereInput[]
    NOT?: AscentWhereInput | AscentWhereInput[]
    userId?: StringFilter<"Ascent"> | string
    routeId?: StringFilter<"Ascent"> | string
    ascentDate?: DateTimeFilter<"Ascent"> | Date | string
    ascentStyle?: StringFilter<"Ascent"> | string
    personalOpinion?: StringFilter<"Ascent"> | string
    CreatedOn?: DateTimeFilter<"Ascent"> | Date | string
    UpdatedOn?: DateTimeFilter<"Ascent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
  }, "id">

  export type AscentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    routeId?: SortOrder
    ascentDate?: SortOrder
    ascentStyle?: SortOrder
    personalOpinion?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
    _count?: AscentCountOrderByAggregateInput
    _max?: AscentMaxOrderByAggregateInput
    _min?: AscentMinOrderByAggregateInput
  }

  export type AscentScalarWhereWithAggregatesInput = {
    AND?: AscentScalarWhereWithAggregatesInput | AscentScalarWhereWithAggregatesInput[]
    OR?: AscentScalarWhereWithAggregatesInput[]
    NOT?: AscentScalarWhereWithAggregatesInput | AscentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ascent"> | string
    userId?: StringWithAggregatesFilter<"Ascent"> | string
    routeId?: StringWithAggregatesFilter<"Ascent"> | string
    ascentDate?: DateTimeWithAggregatesFilter<"Ascent"> | Date | string
    ascentStyle?: StringWithAggregatesFilter<"Ascent"> | string
    personalOpinion?: StringWithAggregatesFilter<"Ascent"> | string
    CreatedOn?: DateTimeWithAggregatesFilter<"Ascent"> | Date | string
    UpdatedOn?: DateTimeWithAggregatesFilter<"Ascent"> | Date | string
  }

  export type CragWhereInput = {
    AND?: CragWhereInput | CragWhereInput[]
    OR?: CragWhereInput[]
    NOT?: CragWhereInput | CragWhereInput[]
    name?: StringFilter<"Crag"> | string
    areaName?: StringFilter<"Crag"> | string
    country?: StringFilter<"Crag"> | string
    minGrade?: StringFilter<"Crag"> | string
    maxGrade?: StringFilter<"Crag"> | string
    CreatedOn?: DateTimeFilter<"Crag"> | Date | string
    UpdatedOn?: DateTimeFilter<"Crag"> | Date | string
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    routes?: RouteListRelationFilter
  }

  export type CragOrderByWithRelationInput = {
    name?: SortOrder
    areaName?: SortOrder
    country?: SortOrder
    minGrade?: SortOrder
    maxGrade?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
    area?: AreaOrderByWithRelationInput
    routes?: RouteOrderByRelationAggregateInput
  }

  export type CragWhereUniqueInput = Prisma.AtLeast<{
    name_areaName_country?: CragNameAreaNameCountryCompoundUniqueInput
    AND?: CragWhereInput | CragWhereInput[]
    OR?: CragWhereInput[]
    NOT?: CragWhereInput | CragWhereInput[]
    name?: StringFilter<"Crag"> | string
    areaName?: StringFilter<"Crag"> | string
    country?: StringFilter<"Crag"> | string
    minGrade?: StringFilter<"Crag"> | string
    maxGrade?: StringFilter<"Crag"> | string
    CreatedOn?: DateTimeFilter<"Crag"> | Date | string
    UpdatedOn?: DateTimeFilter<"Crag"> | Date | string
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    routes?: RouteListRelationFilter
  }, "name_areaName_country">

  export type CragOrderByWithAggregationInput = {
    name?: SortOrder
    areaName?: SortOrder
    country?: SortOrder
    minGrade?: SortOrder
    maxGrade?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
    _count?: CragCountOrderByAggregateInput
    _max?: CragMaxOrderByAggregateInput
    _min?: CragMinOrderByAggregateInput
  }

  export type CragScalarWhereWithAggregatesInput = {
    AND?: CragScalarWhereWithAggregatesInput | CragScalarWhereWithAggregatesInput[]
    OR?: CragScalarWhereWithAggregatesInput[]
    NOT?: CragScalarWhereWithAggregatesInput | CragScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Crag"> | string
    areaName?: StringWithAggregatesFilter<"Crag"> | string
    country?: StringWithAggregatesFilter<"Crag"> | string
    minGrade?: StringWithAggregatesFilter<"Crag"> | string
    maxGrade?: StringWithAggregatesFilter<"Crag"> | string
    CreatedOn?: DateTimeWithAggregatesFilter<"Crag"> | Date | string
    UpdatedOn?: DateTimeWithAggregatesFilter<"Crag"> | Date | string
  }

  export type AreaWhereInput = {
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    name?: StringFilter<"Area"> | string
    country?: StringFilter<"Area"> | string
    rockMaterial?: StringFilter<"Area"> | string
    minGrade?: StringFilter<"Area"> | string
    maxGrade?: StringFilter<"Area"> | string
    CreatedOn?: DateTimeFilter<"Area"> | Date | string
    UpdatedOn?: DateTimeFilter<"Area"> | Date | string
    crags?: CragListRelationFilter
  }

  export type AreaOrderByWithRelationInput = {
    name?: SortOrder
    country?: SortOrder
    rockMaterial?: SortOrder
    minGrade?: SortOrder
    maxGrade?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
    crags?: CragOrderByRelationAggregateInput
  }

  export type AreaWhereUniqueInput = Prisma.AtLeast<{
    name_country?: AreaNameCountryCompoundUniqueInput
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    name?: StringFilter<"Area"> | string
    country?: StringFilter<"Area"> | string
    rockMaterial?: StringFilter<"Area"> | string
    minGrade?: StringFilter<"Area"> | string
    maxGrade?: StringFilter<"Area"> | string
    CreatedOn?: DateTimeFilter<"Area"> | Date | string
    UpdatedOn?: DateTimeFilter<"Area"> | Date | string
    crags?: CragListRelationFilter
  }, "name_country">

  export type AreaOrderByWithAggregationInput = {
    name?: SortOrder
    country?: SortOrder
    rockMaterial?: SortOrder
    minGrade?: SortOrder
    maxGrade?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
    _count?: AreaCountOrderByAggregateInput
    _max?: AreaMaxOrderByAggregateInput
    _min?: AreaMinOrderByAggregateInput
  }

  export type AreaScalarWhereWithAggregatesInput = {
    AND?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    OR?: AreaScalarWhereWithAggregatesInput[]
    NOT?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Area"> | string
    country?: StringWithAggregatesFilter<"Area"> | string
    rockMaterial?: StringWithAggregatesFilter<"Area"> | string
    minGrade?: StringWithAggregatesFilter<"Area"> | string
    maxGrade?: StringWithAggregatesFilter<"Area"> | string
    CreatedOn?: DateTimeWithAggregatesFilter<"Area"> | Date | string
    UpdatedOn?: DateTimeWithAggregatesFilter<"Area"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.Role
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    ascents?: AscentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.Role
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    ascents?: AscentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    ascents?: AscentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    ascents?: AscentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.Role
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    sex?: $Enums.Sex | null
    age?: number | null
    climbingStart?: Date | string | null
    personalBest?: string | null
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    userId: string
    sex?: $Enums.Sex | null
    age?: number | null
    climbingStart?: Date | string | null
    personalBest?: string | null
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    climbingStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personalBest?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    climbingStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personalBest?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateManyInput = {
    id?: string
    userId: string
    sex?: $Enums.Sex | null
    age?: number | null
    climbingStart?: Date | string | null
    personalBest?: string | null
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    climbingStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personalBest?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    climbingStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personalBest?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteCreateInput = {
    id?: string
    name: string
    grade: string
    climbingStyle: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    crag: CragCreateNestedOneWithoutRoutesInput
    ascents?: AscentCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateInput = {
    id?: string
    name: string
    cragName: string
    areaName: string
    country: string
    grade: string
    climbingStyle: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    ascents?: AscentUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    climbingStyle?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    crag?: CragUpdateOneRequiredWithoutRoutesNestedInput
    ascents?: AscentUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cragName?: StringFieldUpdateOperationsInput | string
    areaName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    climbingStyle?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    ascents?: AscentUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteCreateManyInput = {
    id?: string
    name: string
    cragName: string
    areaName: string
    country: string
    grade: string
    climbingStyle: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type RouteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    climbingStyle?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cragName?: StringFieldUpdateOperationsInput | string
    areaName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    climbingStyle?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AscentCreateInput = {
    id?: string
    ascentDate?: Date | string
    ascentStyle: string
    personalOpinion: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    user: UserCreateNestedOneWithoutAscentsInput
    route: RouteCreateNestedOneWithoutAscentsInput
  }

  export type AscentUncheckedCreateInput = {
    id?: string
    userId: string
    routeId: string
    ascentDate?: Date | string
    ascentStyle: string
    personalOpinion: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type AscentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ascentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ascentStyle?: StringFieldUpdateOperationsInput | string
    personalOpinion?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAscentsNestedInput
    route?: RouteUpdateOneRequiredWithoutAscentsNestedInput
  }

  export type AscentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    ascentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ascentStyle?: StringFieldUpdateOperationsInput | string
    personalOpinion?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AscentCreateManyInput = {
    id?: string
    userId: string
    routeId: string
    ascentDate?: Date | string
    ascentStyle: string
    personalOpinion: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type AscentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ascentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ascentStyle?: StringFieldUpdateOperationsInput | string
    personalOpinion?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AscentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    ascentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ascentStyle?: StringFieldUpdateOperationsInput | string
    personalOpinion?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CragCreateInput = {
    name: string
    minGrade: string
    maxGrade: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    area: AreaCreateNestedOneWithoutCragsInput
    routes?: RouteCreateNestedManyWithoutCragInput
  }

  export type CragUncheckedCreateInput = {
    name: string
    areaName: string
    country: string
    minGrade: string
    maxGrade: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    routes?: RouteUncheckedCreateNestedManyWithoutCragInput
  }

  export type CragUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    minGrade?: StringFieldUpdateOperationsInput | string
    maxGrade?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneRequiredWithoutCragsNestedInput
    routes?: RouteUpdateManyWithoutCragNestedInput
  }

  export type CragUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    areaName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    minGrade?: StringFieldUpdateOperationsInput | string
    maxGrade?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUncheckedUpdateManyWithoutCragNestedInput
  }

  export type CragCreateManyInput = {
    name: string
    areaName: string
    country: string
    minGrade: string
    maxGrade: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type CragUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    minGrade?: StringFieldUpdateOperationsInput | string
    maxGrade?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CragUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    areaName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    minGrade?: StringFieldUpdateOperationsInput | string
    maxGrade?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaCreateInput = {
    name: string
    country: string
    rockMaterial: string
    minGrade: string
    maxGrade: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    crags?: CragCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateInput = {
    name: string
    country: string
    rockMaterial: string
    minGrade: string
    maxGrade: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    crags?: CragUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    rockMaterial?: StringFieldUpdateOperationsInput | string
    minGrade?: StringFieldUpdateOperationsInput | string
    maxGrade?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    crags?: CragUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    rockMaterial?: StringFieldUpdateOperationsInput | string
    minGrade?: StringFieldUpdateOperationsInput | string
    maxGrade?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    crags?: CragUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaCreateManyInput = {
    name: string
    country: string
    rockMaterial: string
    minGrade: string
    maxGrade: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type AreaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    rockMaterial?: StringFieldUpdateOperationsInput | string
    minGrade?: StringFieldUpdateOperationsInput | string
    maxGrade?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    rockMaterial?: StringFieldUpdateOperationsInput | string
    minGrade?: StringFieldUpdateOperationsInput | string
    maxGrade?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type AscentListRelationFilter = {
    every?: AscentWhereInput
    some?: AscentWhereInput
    none?: AscentWhereInput
  }

  export type AscentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumSexNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexNullableFilter<$PrismaModel> | $Enums.Sex | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sex?: SortOrder
    age?: SortOrder
    climbingStart?: SortOrder
    personalBest?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sex?: SortOrder
    age?: SortOrder
    climbingStart?: SortOrder
    personalBest?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sex?: SortOrder
    age?: SortOrder
    climbingStart?: SortOrder
    personalBest?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type EnumSexNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexNullableWithAggregatesFilter<$PrismaModel> | $Enums.Sex | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSexNullableFilter<$PrismaModel>
    _max?: NestedEnumSexNullableFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type CragScalarRelationFilter = {
    is?: CragWhereInput
    isNot?: CragWhereInput
  }

  export type RouteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cragName?: SortOrder
    areaName?: SortOrder
    country?: SortOrder
    grade?: SortOrder
    climbingStyle?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cragName?: SortOrder
    areaName?: SortOrder
    country?: SortOrder
    grade?: SortOrder
    climbingStyle?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cragName?: SortOrder
    areaName?: SortOrder
    country?: SortOrder
    grade?: SortOrder
    climbingStyle?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type RouteScalarRelationFilter = {
    is?: RouteWhereInput
    isNot?: RouteWhereInput
  }

  export type AscentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    routeId?: SortOrder
    ascentDate?: SortOrder
    ascentStyle?: SortOrder
    personalOpinion?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type AscentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    routeId?: SortOrder
    ascentDate?: SortOrder
    ascentStyle?: SortOrder
    personalOpinion?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type AscentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    routeId?: SortOrder
    ascentDate?: SortOrder
    ascentStyle?: SortOrder
    personalOpinion?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type AreaScalarRelationFilter = {
    is?: AreaWhereInput
    isNot?: AreaWhereInput
  }

  export type RouteListRelationFilter = {
    every?: RouteWhereInput
    some?: RouteWhereInput
    none?: RouteWhereInput
  }

  export type RouteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CragNameAreaNameCountryCompoundUniqueInput = {
    name: string
    areaName: string
    country: string
  }

  export type CragCountOrderByAggregateInput = {
    name?: SortOrder
    areaName?: SortOrder
    country?: SortOrder
    minGrade?: SortOrder
    maxGrade?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type CragMaxOrderByAggregateInput = {
    name?: SortOrder
    areaName?: SortOrder
    country?: SortOrder
    minGrade?: SortOrder
    maxGrade?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type CragMinOrderByAggregateInput = {
    name?: SortOrder
    areaName?: SortOrder
    country?: SortOrder
    minGrade?: SortOrder
    maxGrade?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type CragListRelationFilter = {
    every?: CragWhereInput
    some?: CragWhereInput
    none?: CragWhereInput
  }

  export type CragOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaNameCountryCompoundUniqueInput = {
    name: string
    country: string
  }

  export type AreaCountOrderByAggregateInput = {
    name?: SortOrder
    country?: SortOrder
    rockMaterial?: SortOrder
    minGrade?: SortOrder
    maxGrade?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type AreaMaxOrderByAggregateInput = {
    name?: SortOrder
    country?: SortOrder
    rockMaterial?: SortOrder
    minGrade?: SortOrder
    maxGrade?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type AreaMinOrderByAggregateInput = {
    name?: SortOrder
    country?: SortOrder
    rockMaterial?: SortOrder
    minGrade?: SortOrder
    maxGrade?: SortOrder
    CreatedOn?: SortOrder
    UpdatedOn?: SortOrder
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type AscentCreateNestedManyWithoutUserInput = {
    create?: XOR<AscentCreateWithoutUserInput, AscentUncheckedCreateWithoutUserInput> | AscentCreateWithoutUserInput[] | AscentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AscentCreateOrConnectWithoutUserInput | AscentCreateOrConnectWithoutUserInput[]
    createMany?: AscentCreateManyUserInputEnvelope
    connect?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type AscentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AscentCreateWithoutUserInput, AscentUncheckedCreateWithoutUserInput> | AscentCreateWithoutUserInput[] | AscentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AscentCreateOrConnectWithoutUserInput | AscentCreateOrConnectWithoutUserInput[]
    createMany?: AscentCreateManyUserInputEnvelope
    connect?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type AscentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AscentCreateWithoutUserInput, AscentUncheckedCreateWithoutUserInput> | AscentCreateWithoutUserInput[] | AscentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AscentCreateOrConnectWithoutUserInput | AscentCreateOrConnectWithoutUserInput[]
    upsert?: AscentUpsertWithWhereUniqueWithoutUserInput | AscentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AscentCreateManyUserInputEnvelope
    set?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
    disconnect?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
    delete?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
    connect?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
    update?: AscentUpdateWithWhereUniqueWithoutUserInput | AscentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AscentUpdateManyWithWhereWithoutUserInput | AscentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AscentScalarWhereInput | AscentScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type AscentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AscentCreateWithoutUserInput, AscentUncheckedCreateWithoutUserInput> | AscentCreateWithoutUserInput[] | AscentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AscentCreateOrConnectWithoutUserInput | AscentCreateOrConnectWithoutUserInput[]
    upsert?: AscentUpsertWithWhereUniqueWithoutUserInput | AscentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AscentCreateManyUserInputEnvelope
    set?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
    disconnect?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
    delete?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
    connect?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
    update?: AscentUpdateWithWhereUniqueWithoutUserInput | AscentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AscentUpdateManyWithWhereWithoutUserInput | AscentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AscentScalarWhereInput | AscentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumSexFieldUpdateOperationsInput = {
    set?: $Enums.Sex | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type CragCreateNestedOneWithoutRoutesInput = {
    create?: XOR<CragCreateWithoutRoutesInput, CragUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: CragCreateOrConnectWithoutRoutesInput
    connect?: CragWhereUniqueInput
  }

  export type AscentCreateNestedManyWithoutRouteInput = {
    create?: XOR<AscentCreateWithoutRouteInput, AscentUncheckedCreateWithoutRouteInput> | AscentCreateWithoutRouteInput[] | AscentUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: AscentCreateOrConnectWithoutRouteInput | AscentCreateOrConnectWithoutRouteInput[]
    createMany?: AscentCreateManyRouteInputEnvelope
    connect?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
  }

  export type AscentUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<AscentCreateWithoutRouteInput, AscentUncheckedCreateWithoutRouteInput> | AscentCreateWithoutRouteInput[] | AscentUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: AscentCreateOrConnectWithoutRouteInput | AscentCreateOrConnectWithoutRouteInput[]
    createMany?: AscentCreateManyRouteInputEnvelope
    connect?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
  }

  export type CragUpdateOneRequiredWithoutRoutesNestedInput = {
    create?: XOR<CragCreateWithoutRoutesInput, CragUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: CragCreateOrConnectWithoutRoutesInput
    upsert?: CragUpsertWithoutRoutesInput
    connect?: CragWhereUniqueInput
    update?: XOR<XOR<CragUpdateToOneWithWhereWithoutRoutesInput, CragUpdateWithoutRoutesInput>, CragUncheckedUpdateWithoutRoutesInput>
  }

  export type AscentUpdateManyWithoutRouteNestedInput = {
    create?: XOR<AscentCreateWithoutRouteInput, AscentUncheckedCreateWithoutRouteInput> | AscentCreateWithoutRouteInput[] | AscentUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: AscentCreateOrConnectWithoutRouteInput | AscentCreateOrConnectWithoutRouteInput[]
    upsert?: AscentUpsertWithWhereUniqueWithoutRouteInput | AscentUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: AscentCreateManyRouteInputEnvelope
    set?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
    disconnect?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
    delete?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
    connect?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
    update?: AscentUpdateWithWhereUniqueWithoutRouteInput | AscentUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: AscentUpdateManyWithWhereWithoutRouteInput | AscentUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: AscentScalarWhereInput | AscentScalarWhereInput[]
  }

  export type AscentUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<AscentCreateWithoutRouteInput, AscentUncheckedCreateWithoutRouteInput> | AscentCreateWithoutRouteInput[] | AscentUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: AscentCreateOrConnectWithoutRouteInput | AscentCreateOrConnectWithoutRouteInput[]
    upsert?: AscentUpsertWithWhereUniqueWithoutRouteInput | AscentUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: AscentCreateManyRouteInputEnvelope
    set?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
    disconnect?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
    delete?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
    connect?: AscentWhereUniqueInput | AscentWhereUniqueInput[]
    update?: AscentUpdateWithWhereUniqueWithoutRouteInput | AscentUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: AscentUpdateManyWithWhereWithoutRouteInput | AscentUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: AscentScalarWhereInput | AscentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAscentsInput = {
    create?: XOR<UserCreateWithoutAscentsInput, UserUncheckedCreateWithoutAscentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAscentsInput
    connect?: UserWhereUniqueInput
  }

  export type RouteCreateNestedOneWithoutAscentsInput = {
    create?: XOR<RouteCreateWithoutAscentsInput, RouteUncheckedCreateWithoutAscentsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutAscentsInput
    connect?: RouteWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAscentsNestedInput = {
    create?: XOR<UserCreateWithoutAscentsInput, UserUncheckedCreateWithoutAscentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAscentsInput
    upsert?: UserUpsertWithoutAscentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAscentsInput, UserUpdateWithoutAscentsInput>, UserUncheckedUpdateWithoutAscentsInput>
  }

  export type RouteUpdateOneRequiredWithoutAscentsNestedInput = {
    create?: XOR<RouteCreateWithoutAscentsInput, RouteUncheckedCreateWithoutAscentsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutAscentsInput
    upsert?: RouteUpsertWithoutAscentsInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutAscentsInput, RouteUpdateWithoutAscentsInput>, RouteUncheckedUpdateWithoutAscentsInput>
  }

  export type AreaCreateNestedOneWithoutCragsInput = {
    create?: XOR<AreaCreateWithoutCragsInput, AreaUncheckedCreateWithoutCragsInput>
    connectOrCreate?: AreaCreateOrConnectWithoutCragsInput
    connect?: AreaWhereUniqueInput
  }

  export type RouteCreateNestedManyWithoutCragInput = {
    create?: XOR<RouteCreateWithoutCragInput, RouteUncheckedCreateWithoutCragInput> | RouteCreateWithoutCragInput[] | RouteUncheckedCreateWithoutCragInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutCragInput | RouteCreateOrConnectWithoutCragInput[]
    createMany?: RouteCreateManyCragInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type RouteUncheckedCreateNestedManyWithoutCragInput = {
    create?: XOR<RouteCreateWithoutCragInput, RouteUncheckedCreateWithoutCragInput> | RouteCreateWithoutCragInput[] | RouteUncheckedCreateWithoutCragInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutCragInput | RouteCreateOrConnectWithoutCragInput[]
    createMany?: RouteCreateManyCragInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type AreaUpdateOneRequiredWithoutCragsNestedInput = {
    create?: XOR<AreaCreateWithoutCragsInput, AreaUncheckedCreateWithoutCragsInput>
    connectOrCreate?: AreaCreateOrConnectWithoutCragsInput
    upsert?: AreaUpsertWithoutCragsInput
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutCragsInput, AreaUpdateWithoutCragsInput>, AreaUncheckedUpdateWithoutCragsInput>
  }

  export type RouteUpdateManyWithoutCragNestedInput = {
    create?: XOR<RouteCreateWithoutCragInput, RouteUncheckedCreateWithoutCragInput> | RouteCreateWithoutCragInput[] | RouteUncheckedCreateWithoutCragInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutCragInput | RouteCreateOrConnectWithoutCragInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutCragInput | RouteUpsertWithWhereUniqueWithoutCragInput[]
    createMany?: RouteCreateManyCragInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutCragInput | RouteUpdateWithWhereUniqueWithoutCragInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutCragInput | RouteUpdateManyWithWhereWithoutCragInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type RouteUncheckedUpdateManyWithoutCragNestedInput = {
    create?: XOR<RouteCreateWithoutCragInput, RouteUncheckedCreateWithoutCragInput> | RouteCreateWithoutCragInput[] | RouteUncheckedCreateWithoutCragInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutCragInput | RouteCreateOrConnectWithoutCragInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutCragInput | RouteUpsertWithWhereUniqueWithoutCragInput[]
    createMany?: RouteCreateManyCragInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutCragInput | RouteUpdateWithWhereUniqueWithoutCragInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutCragInput | RouteUpdateManyWithWhereWithoutCragInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type CragCreateNestedManyWithoutAreaInput = {
    create?: XOR<CragCreateWithoutAreaInput, CragUncheckedCreateWithoutAreaInput> | CragCreateWithoutAreaInput[] | CragUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: CragCreateOrConnectWithoutAreaInput | CragCreateOrConnectWithoutAreaInput[]
    createMany?: CragCreateManyAreaInputEnvelope
    connect?: CragWhereUniqueInput | CragWhereUniqueInput[]
  }

  export type CragUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<CragCreateWithoutAreaInput, CragUncheckedCreateWithoutAreaInput> | CragCreateWithoutAreaInput[] | CragUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: CragCreateOrConnectWithoutAreaInput | CragCreateOrConnectWithoutAreaInput[]
    createMany?: CragCreateManyAreaInputEnvelope
    connect?: CragWhereUniqueInput | CragWhereUniqueInput[]
  }

  export type CragUpdateManyWithoutAreaNestedInput = {
    create?: XOR<CragCreateWithoutAreaInput, CragUncheckedCreateWithoutAreaInput> | CragCreateWithoutAreaInput[] | CragUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: CragCreateOrConnectWithoutAreaInput | CragCreateOrConnectWithoutAreaInput[]
    upsert?: CragUpsertWithWhereUniqueWithoutAreaInput | CragUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: CragCreateManyAreaInputEnvelope
    set?: CragWhereUniqueInput | CragWhereUniqueInput[]
    disconnect?: CragWhereUniqueInput | CragWhereUniqueInput[]
    delete?: CragWhereUniqueInput | CragWhereUniqueInput[]
    connect?: CragWhereUniqueInput | CragWhereUniqueInput[]
    update?: CragUpdateWithWhereUniqueWithoutAreaInput | CragUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: CragUpdateManyWithWhereWithoutAreaInput | CragUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: CragScalarWhereInput | CragScalarWhereInput[]
  }

  export type CragUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<CragCreateWithoutAreaInput, CragUncheckedCreateWithoutAreaInput> | CragCreateWithoutAreaInput[] | CragUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: CragCreateOrConnectWithoutAreaInput | CragCreateOrConnectWithoutAreaInput[]
    upsert?: CragUpsertWithWhereUniqueWithoutAreaInput | CragUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: CragCreateManyAreaInputEnvelope
    set?: CragWhereUniqueInput | CragWhereUniqueInput[]
    disconnect?: CragWhereUniqueInput | CragWhereUniqueInput[]
    delete?: CragWhereUniqueInput | CragWhereUniqueInput[]
    connect?: CragWhereUniqueInput | CragWhereUniqueInput[]
    update?: CragUpdateWithWhereUniqueWithoutAreaInput | CragUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: CragUpdateManyWithWhereWithoutAreaInput | CragUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: CragScalarWhereInput | CragScalarWhereInput[]
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumSexNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexNullableFilter<$PrismaModel> | $Enums.Sex | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumSexNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexNullableWithAggregatesFilter<$PrismaModel> | $Enums.Sex | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSexNullableFilter<$PrismaModel>
    _max?: NestedEnumSexNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type ProfileCreateWithoutUserInput = {
    id?: string
    sex?: $Enums.Sex | null
    age?: number | null
    climbingStart?: Date | string | null
    personalBest?: string | null
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    sex?: $Enums.Sex | null
    age?: number | null
    climbingStart?: Date | string | null
    personalBest?: string | null
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type AscentCreateWithoutUserInput = {
    id?: string
    ascentDate?: Date | string
    ascentStyle: string
    personalOpinion: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    route: RouteCreateNestedOneWithoutAscentsInput
  }

  export type AscentUncheckedCreateWithoutUserInput = {
    id?: string
    routeId: string
    ascentDate?: Date | string
    ascentStyle: string
    personalOpinion: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type AscentCreateOrConnectWithoutUserInput = {
    where: AscentWhereUniqueInput
    create: XOR<AscentCreateWithoutUserInput, AscentUncheckedCreateWithoutUserInput>
  }

  export type AscentCreateManyUserInputEnvelope = {
    data: AscentCreateManyUserInput | AscentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    climbingStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personalBest?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    climbingStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    personalBest?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AscentUpsertWithWhereUniqueWithoutUserInput = {
    where: AscentWhereUniqueInput
    update: XOR<AscentUpdateWithoutUserInput, AscentUncheckedUpdateWithoutUserInput>
    create: XOR<AscentCreateWithoutUserInput, AscentUncheckedCreateWithoutUserInput>
  }

  export type AscentUpdateWithWhereUniqueWithoutUserInput = {
    where: AscentWhereUniqueInput
    data: XOR<AscentUpdateWithoutUserInput, AscentUncheckedUpdateWithoutUserInput>
  }

  export type AscentUpdateManyWithWhereWithoutUserInput = {
    where: AscentScalarWhereInput
    data: XOR<AscentUpdateManyMutationInput, AscentUncheckedUpdateManyWithoutUserInput>
  }

  export type AscentScalarWhereInput = {
    AND?: AscentScalarWhereInput | AscentScalarWhereInput[]
    OR?: AscentScalarWhereInput[]
    NOT?: AscentScalarWhereInput | AscentScalarWhereInput[]
    id?: StringFilter<"Ascent"> | string
    userId?: StringFilter<"Ascent"> | string
    routeId?: StringFilter<"Ascent"> | string
    ascentDate?: DateTimeFilter<"Ascent"> | Date | string
    ascentStyle?: StringFilter<"Ascent"> | string
    personalOpinion?: StringFilter<"Ascent"> | string
    CreatedOn?: DateTimeFilter<"Ascent"> | Date | string
    UpdatedOn?: DateTimeFilter<"Ascent"> | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.Role
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    ascents?: AscentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.Role
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    ascents?: AscentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    ascents?: AscentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    ascents?: AscentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CragCreateWithoutRoutesInput = {
    name: string
    minGrade: string
    maxGrade: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    area: AreaCreateNestedOneWithoutCragsInput
  }

  export type CragUncheckedCreateWithoutRoutesInput = {
    name: string
    areaName: string
    country: string
    minGrade: string
    maxGrade: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type CragCreateOrConnectWithoutRoutesInput = {
    where: CragWhereUniqueInput
    create: XOR<CragCreateWithoutRoutesInput, CragUncheckedCreateWithoutRoutesInput>
  }

  export type AscentCreateWithoutRouteInput = {
    id?: string
    ascentDate?: Date | string
    ascentStyle: string
    personalOpinion: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    user: UserCreateNestedOneWithoutAscentsInput
  }

  export type AscentUncheckedCreateWithoutRouteInput = {
    id?: string
    userId: string
    ascentDate?: Date | string
    ascentStyle: string
    personalOpinion: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type AscentCreateOrConnectWithoutRouteInput = {
    where: AscentWhereUniqueInput
    create: XOR<AscentCreateWithoutRouteInput, AscentUncheckedCreateWithoutRouteInput>
  }

  export type AscentCreateManyRouteInputEnvelope = {
    data: AscentCreateManyRouteInput | AscentCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type CragUpsertWithoutRoutesInput = {
    update: XOR<CragUpdateWithoutRoutesInput, CragUncheckedUpdateWithoutRoutesInput>
    create: XOR<CragCreateWithoutRoutesInput, CragUncheckedCreateWithoutRoutesInput>
    where?: CragWhereInput
  }

  export type CragUpdateToOneWithWhereWithoutRoutesInput = {
    where?: CragWhereInput
    data: XOR<CragUpdateWithoutRoutesInput, CragUncheckedUpdateWithoutRoutesInput>
  }

  export type CragUpdateWithoutRoutesInput = {
    name?: StringFieldUpdateOperationsInput | string
    minGrade?: StringFieldUpdateOperationsInput | string
    maxGrade?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneRequiredWithoutCragsNestedInput
  }

  export type CragUncheckedUpdateWithoutRoutesInput = {
    name?: StringFieldUpdateOperationsInput | string
    areaName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    minGrade?: StringFieldUpdateOperationsInput | string
    maxGrade?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AscentUpsertWithWhereUniqueWithoutRouteInput = {
    where: AscentWhereUniqueInput
    update: XOR<AscentUpdateWithoutRouteInput, AscentUncheckedUpdateWithoutRouteInput>
    create: XOR<AscentCreateWithoutRouteInput, AscentUncheckedCreateWithoutRouteInput>
  }

  export type AscentUpdateWithWhereUniqueWithoutRouteInput = {
    where: AscentWhereUniqueInput
    data: XOR<AscentUpdateWithoutRouteInput, AscentUncheckedUpdateWithoutRouteInput>
  }

  export type AscentUpdateManyWithWhereWithoutRouteInput = {
    where: AscentScalarWhereInput
    data: XOR<AscentUpdateManyMutationInput, AscentUncheckedUpdateManyWithoutRouteInput>
  }

  export type UserCreateWithoutAscentsInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.Role
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAscentsInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.Role
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAscentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAscentsInput, UserUncheckedCreateWithoutAscentsInput>
  }

  export type RouteCreateWithoutAscentsInput = {
    id?: string
    name: string
    grade: string
    climbingStyle: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    crag: CragCreateNestedOneWithoutRoutesInput
  }

  export type RouteUncheckedCreateWithoutAscentsInput = {
    id?: string
    name: string
    cragName: string
    areaName: string
    country: string
    grade: string
    climbingStyle: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type RouteCreateOrConnectWithoutAscentsInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutAscentsInput, RouteUncheckedCreateWithoutAscentsInput>
  }

  export type UserUpsertWithoutAscentsInput = {
    update: XOR<UserUpdateWithoutAscentsInput, UserUncheckedUpdateWithoutAscentsInput>
    create: XOR<UserCreateWithoutAscentsInput, UserUncheckedCreateWithoutAscentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAscentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAscentsInput, UserUncheckedUpdateWithoutAscentsInput>
  }

  export type UserUpdateWithoutAscentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAscentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type RouteUpsertWithoutAscentsInput = {
    update: XOR<RouteUpdateWithoutAscentsInput, RouteUncheckedUpdateWithoutAscentsInput>
    create: XOR<RouteCreateWithoutAscentsInput, RouteUncheckedCreateWithoutAscentsInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutAscentsInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutAscentsInput, RouteUncheckedUpdateWithoutAscentsInput>
  }

  export type RouteUpdateWithoutAscentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    climbingStyle?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    crag?: CragUpdateOneRequiredWithoutRoutesNestedInput
  }

  export type RouteUncheckedUpdateWithoutAscentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cragName?: StringFieldUpdateOperationsInput | string
    areaName?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    climbingStyle?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaCreateWithoutCragsInput = {
    name: string
    country: string
    rockMaterial: string
    minGrade: string
    maxGrade: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type AreaUncheckedCreateWithoutCragsInput = {
    name: string
    country: string
    rockMaterial: string
    minGrade: string
    maxGrade: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type AreaCreateOrConnectWithoutCragsInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutCragsInput, AreaUncheckedCreateWithoutCragsInput>
  }

  export type RouteCreateWithoutCragInput = {
    id?: string
    name: string
    grade: string
    climbingStyle: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    ascents?: AscentCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutCragInput = {
    id?: string
    name: string
    grade: string
    climbingStyle: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    ascents?: AscentUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutCragInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutCragInput, RouteUncheckedCreateWithoutCragInput>
  }

  export type RouteCreateManyCragInputEnvelope = {
    data: RouteCreateManyCragInput | RouteCreateManyCragInput[]
    skipDuplicates?: boolean
  }

  export type AreaUpsertWithoutCragsInput = {
    update: XOR<AreaUpdateWithoutCragsInput, AreaUncheckedUpdateWithoutCragsInput>
    create: XOR<AreaCreateWithoutCragsInput, AreaUncheckedCreateWithoutCragsInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutCragsInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutCragsInput, AreaUncheckedUpdateWithoutCragsInput>
  }

  export type AreaUpdateWithoutCragsInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    rockMaterial?: StringFieldUpdateOperationsInput | string
    minGrade?: StringFieldUpdateOperationsInput | string
    maxGrade?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaUncheckedUpdateWithoutCragsInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    rockMaterial?: StringFieldUpdateOperationsInput | string
    minGrade?: StringFieldUpdateOperationsInput | string
    maxGrade?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUpsertWithWhereUniqueWithoutCragInput = {
    where: RouteWhereUniqueInput
    update: XOR<RouteUpdateWithoutCragInput, RouteUncheckedUpdateWithoutCragInput>
    create: XOR<RouteCreateWithoutCragInput, RouteUncheckedCreateWithoutCragInput>
  }

  export type RouteUpdateWithWhereUniqueWithoutCragInput = {
    where: RouteWhereUniqueInput
    data: XOR<RouteUpdateWithoutCragInput, RouteUncheckedUpdateWithoutCragInput>
  }

  export type RouteUpdateManyWithWhereWithoutCragInput = {
    where: RouteScalarWhereInput
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyWithoutCragInput>
  }

  export type RouteScalarWhereInput = {
    AND?: RouteScalarWhereInput | RouteScalarWhereInput[]
    OR?: RouteScalarWhereInput[]
    NOT?: RouteScalarWhereInput | RouteScalarWhereInput[]
    id?: StringFilter<"Route"> | string
    name?: StringFilter<"Route"> | string
    cragName?: StringFilter<"Route"> | string
    areaName?: StringFilter<"Route"> | string
    country?: StringFilter<"Route"> | string
    grade?: StringFilter<"Route"> | string
    climbingStyle?: StringFilter<"Route"> | string
    CreatedOn?: DateTimeFilter<"Route"> | Date | string
    UpdatedOn?: DateTimeFilter<"Route"> | Date | string
  }

  export type CragCreateWithoutAreaInput = {
    name: string
    minGrade: string
    maxGrade: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    routes?: RouteCreateNestedManyWithoutCragInput
  }

  export type CragUncheckedCreateWithoutAreaInput = {
    name: string
    minGrade: string
    maxGrade: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
    routes?: RouteUncheckedCreateNestedManyWithoutCragInput
  }

  export type CragCreateOrConnectWithoutAreaInput = {
    where: CragWhereUniqueInput
    create: XOR<CragCreateWithoutAreaInput, CragUncheckedCreateWithoutAreaInput>
  }

  export type CragCreateManyAreaInputEnvelope = {
    data: CragCreateManyAreaInput | CragCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type CragUpsertWithWhereUniqueWithoutAreaInput = {
    where: CragWhereUniqueInput
    update: XOR<CragUpdateWithoutAreaInput, CragUncheckedUpdateWithoutAreaInput>
    create: XOR<CragCreateWithoutAreaInput, CragUncheckedCreateWithoutAreaInput>
  }

  export type CragUpdateWithWhereUniqueWithoutAreaInput = {
    where: CragWhereUniqueInput
    data: XOR<CragUpdateWithoutAreaInput, CragUncheckedUpdateWithoutAreaInput>
  }

  export type CragUpdateManyWithWhereWithoutAreaInput = {
    where: CragScalarWhereInput
    data: XOR<CragUpdateManyMutationInput, CragUncheckedUpdateManyWithoutAreaInput>
  }

  export type CragScalarWhereInput = {
    AND?: CragScalarWhereInput | CragScalarWhereInput[]
    OR?: CragScalarWhereInput[]
    NOT?: CragScalarWhereInput | CragScalarWhereInput[]
    name?: StringFilter<"Crag"> | string
    areaName?: StringFilter<"Crag"> | string
    country?: StringFilter<"Crag"> | string
    minGrade?: StringFilter<"Crag"> | string
    maxGrade?: StringFilter<"Crag"> | string
    CreatedOn?: DateTimeFilter<"Crag"> | Date | string
    UpdatedOn?: DateTimeFilter<"Crag"> | Date | string
  }

  export type AscentCreateManyUserInput = {
    id?: string
    routeId: string
    ascentDate?: Date | string
    ascentStyle: string
    personalOpinion: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type AscentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ascentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ascentStyle?: StringFieldUpdateOperationsInput | string
    personalOpinion?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutAscentsNestedInput
  }

  export type AscentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    ascentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ascentStyle?: StringFieldUpdateOperationsInput | string
    personalOpinion?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AscentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    ascentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ascentStyle?: StringFieldUpdateOperationsInput | string
    personalOpinion?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AscentCreateManyRouteInput = {
    id?: string
    userId: string
    ascentDate?: Date | string
    ascentStyle: string
    personalOpinion: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type AscentUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    ascentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ascentStyle?: StringFieldUpdateOperationsInput | string
    personalOpinion?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAscentsNestedInput
  }

  export type AscentUncheckedUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ascentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ascentStyle?: StringFieldUpdateOperationsInput | string
    personalOpinion?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AscentUncheckedUpdateManyWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ascentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ascentStyle?: StringFieldUpdateOperationsInput | string
    personalOpinion?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteCreateManyCragInput = {
    id?: string
    name: string
    grade: string
    climbingStyle: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type RouteUpdateWithoutCragInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    climbingStyle?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    ascents?: AscentUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutCragInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    climbingStyle?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    ascents?: AscentUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateManyWithoutCragInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    climbingStyle?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CragCreateManyAreaInput = {
    name: string
    minGrade: string
    maxGrade: string
    CreatedOn?: Date | string
    UpdatedOn?: Date | string
  }

  export type CragUpdateWithoutAreaInput = {
    name?: StringFieldUpdateOperationsInput | string
    minGrade?: StringFieldUpdateOperationsInput | string
    maxGrade?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUpdateManyWithoutCragNestedInput
  }

  export type CragUncheckedUpdateWithoutAreaInput = {
    name?: StringFieldUpdateOperationsInput | string
    minGrade?: StringFieldUpdateOperationsInput | string
    maxGrade?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUncheckedUpdateManyWithoutCragNestedInput
  }

  export type CragUncheckedUpdateManyWithoutAreaInput = {
    name?: StringFieldUpdateOperationsInput | string
    minGrade?: StringFieldUpdateOperationsInput | string
    maxGrade?: StringFieldUpdateOperationsInput | string
    CreatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
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