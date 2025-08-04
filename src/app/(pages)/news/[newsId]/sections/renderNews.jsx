'use client'

import { BlocksRenderer } from '@strapi/blocks-react-renderer'

export default function RenderNews({ content }) {
	return (
		<BlocksRenderer
			content={content}
			blocks={{
				image: ({ image }) => (
					<img
						src={image.url}
						alt={image.alternativeText || ''}
						className='rounded'
					/>
				),
			}}
		/>
	)
}
