/** @jsxImportSource react */

import { ImageResponse } from '@vercel/og'
// @ts-expect-error Need to be imported to use jsx
import React from 'react'

export function generateOgImage(titleSplitted: string[]) {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        backgroundColor: '#17181c',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '96px',
        height: '100%',
        justifyContent: 'center',
        paddingBottom: '5%',
        position: 'relative',
        width: '100%',
      }}
    >
      {titleSplitted.map(title => (
        // biome-ignore lint/correctness/useJsxKeyInIterable: non necessary
        <div>{title}</div>
      ))}
      <div
        style={{
          bottom: '5%',
          fontSize: '48px',
          position: 'absolute',
          right: '5%',
        }}
      >
        totto2727
      </div>
    </div>,
  )
}
