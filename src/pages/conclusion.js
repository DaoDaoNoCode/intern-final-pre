import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  PageSectionVariants,
  Card,
  CardTitle,
  CardBody,
  Text,
  TextContent,
  TextList,
  TextListItem,
  TextVariants,
} from "@patternfly/react-core"
import "../styles/override.css"

const ConclusionPage = () => (
  <Layout index={4} pageSectionVariant={PageSectionVariants.default}>
    <SEO title="Conclusion" />
    <Card>
      <CardTitle>What else I did? (If time permits)</CardTitle>
      <CardBody>
        <a
          href="https://github.com/openshift/console/pull/6169"
          target="_blank"
          rel="noreferrer"
        >
          Implement column management feature on Nodes page, Projects page, and
          Namespaces page
        </a>
      </CardBody>
    </Card>
    <Card>
      <CardTitle>What I learned?</CardTitle>
      <CardBody>
        <TextContent>
          <TextList>
            <TextListItem>Never feel ashamed to ask others.</TextListItem>
            <TextListItem>
              Try to make more comments on the code and pull request to help
              others understand it better.
            </TextListItem>
            <TextListItem>
              Be responsible for the code, try to make it best.
            </TextListItem>
            <TextListItem>
              Try to discuss with others about the products, don't make
              decisions only by yourself.
            </TextListItem>
            <TextListItem>
              Keep learning, there are still lots of knowledges to explore.
            </TextListItem>
          </TextList>
        </TextContent>
      </CardBody>
    </Card>
    <Card>
      <CardBody style={{ textAlign: "center" }}>
        <TextContent>
          <Text component={TextVariants.h1}>
            <b>Thank you!</b>
          </Text>
          <Text component={TextVariants.h1}>
            <b>Q{"&"}A</b>
          </Text>
        </TextContent>
      </CardBody>
    </Card>
  </Layout>
)

export default ConclusionPage
