export * as ST from '@totto/option-t-safe-try'

/**
 * ```bash
 * pnpm i effect option-t
 * pnpx jsr add @totto/option-t-safe-try
 * ```
 */
export {
  Array as A,
  Boolean as B,
  Effect as E,
  flow,
  Iterable as I,
  Number as N,
  Predicate as P,
  pipe,
  Record as R,
  String as S,
  Tuple as T,
  Types as Ty,
} from 'effect'
export { Maybe as M } from 'option-t/maybe/namespace'
export { Nullable } from 'option-t/nullable/namespace'
export { Result as PR } from 'option-t/plain_result/namespace'

export { Undefinable } from 'option-t/undefinable/namespace'
