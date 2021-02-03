import { useEffect } from 'react'
import BlockContent from '@sanity/block-content-to-react'
import styles from '../../styles/Blog.module.scss'
import Link from 'next/link'
import Head from 'next/head'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai.css'
import javascript from 'highlight.js/lib/languages/javascript'
import bash from 'highlight.js/lib/languages/bash'
import php from 'highlight.js/lib/languages/php'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('php', php)

const Article = ({ post }) => {
	useEffect(() => {
		hljs.initHighlighting()
	}, [post])

	const serializers = {
		types: {
			code: (props) => (
				<>
					<Head>
						<link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" />
					</Head>
					<pre data-language={props.node.language}>
						<code className={props.node.language}>{props.node.code}</code>
					</pre>
				</>
			)
		}
	}

	return (
		<article className={styles.article}>
			<div className="container">
				<h1>{post.title}</h1>
				<div className="post-meta">
					By <Link href="/">Sadman</Link> on{' '}
					{new Date(post.publishedAt).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'short',
						day: 'numeric'
					})}
				</div>
				<BlockContent className={styles.articleContent} blocks={post.body} serializers={serializers} />
			</div>
		</article>
	)
}

export default Article
