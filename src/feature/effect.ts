/**
 * ```bash
 * pnpm i effect option-t
 * pnpx jsr add @totto/option-t-safe-try
 * ```
 */
export {
	pipe,
	flow,
	Effect as E,
	Predicate as P,
	String as S,
	Number as N,
	Iterable as I,
	Array as A,
	Tuple as T,
	Types as Ty,
	Record as R,
	Boolean as B,
} from "effect"

export { Result as PR } from "option-t/plain_result/namespace"
export { Maybe as M } from "option-t/maybe/namespace"
export { Undefinable } from "option-t/undefinable/namespace"
export { Nullable } from "option-t/nullable/namespace"

export * as ST from "@totto/option-t-safe-try"
