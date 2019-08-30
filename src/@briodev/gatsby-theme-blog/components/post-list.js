import React from 'react'
import { Link } from 'gatsby';
import styled from '@emotion/styled'
import { Styled } from "theme-ui";
import { Container } from "theme-ui";


export default (props) => {
    const posts = props.posts

    return (
        <>
            <Container>
                <Heading>MSDC BLOG</Heading>
                {posts ? posts.map(({ node }) => (
                    <div key={node.id}>
                        <Styled.a as={Link} to={`${node.slug}`}>
                            <PostTitle>
                                {node.title}
                            </PostTitle>
                        </Styled.a>
                        <div>
                            <ArticleDate>{node.date}</ArticleDate>
                            <ReadingTime>&nbsp;-&nbsp;{node.timeToRead}&nbsp;min read</ReadingTime>
                        </div>
                        <Excerpt>{node.excerpt}</Excerpt>
                    </div>
                )) : null}
            </Container>
        </>
    )
}

const Heading = styled.h1`
    color: #fbc02d;
    text-decoration: underline;
    padding-bottom: 2rem;
`

const ArticleDate = styled.h5`
  display: inline;
  color: #0d47a1;
  margin-bottom: 10px;
`

const PostTitle = styled.h3`
  color: #000000;
  display: inline;
  border-radius: 1em 0 1em 0;
  margin-bottom: 10px;
`

const ReadingTime = styled.h5`
  display: inline;
  color: #2196f3;
  margin-bottom: 1em;
  margin-left: .5em;
`

const Excerpt = styled.div`
    margin: 1em 0 2em 0;
    font-family: -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
`