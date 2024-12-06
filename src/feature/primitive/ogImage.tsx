/** @jsxImportSource react */

// @ts-expect-error Need to be imported to use jsx
import React from "react"

import { ImageResponse } from "@vercel/og"

export function generateOgImage(titleSplitted: string[]) {
	return new ImageResponse(
		<div
			style={{
				position: "relative",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				paddingBottom: "5%",
				fontSize: "96px",
				color: "#fff",
				backgroundColor: "#17181c",
			}}
		>
			{titleSplitted.map((title) => (
				// biome-ignore lint/correctness/useJsxKeyInIterable: non necessary
				<div>{title}</div>
			))}
			<div
				style={{
					fontSize: "48px",
					position: "absolute",
					bottom: "5%",
					right: "5%",
				}}
			>
				totto2727
			</div>
		</div>,
	)
}
