import React from 'react'

export default function Button({ text, mx }) {
	return (
		<button
			type='button'
			className={`border border-black px-8 py-4 hover:bg-black hover:text-white ${mx}`}
		>
			{text}
		</button>
	)
}
