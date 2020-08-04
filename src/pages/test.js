import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  PageSectionVariants,
  Card,
  CardTitle,
  CardBody,
  TextContent,
  TextList,
  TextListItem,
} from "@patternfly/react-core"
import "../styles/accessibility.css"
import ImageEmptyState from "../components/image-empty-state"

const TestPage = () => (
  <Layout index={3} pageSectionVariant={PageSectionVariants.default}>
    <SEO title="Test" />
    <Card>
      <CardTitle>Unit test using Jest and Enzyme in OpenShift</CardTitle>
      <CardBody>
        <TextContent>
          <TextList>
            <TextListItem>
              There are 2 different kinds of alerts in OpenShift:{" "}
              <b>Critical Alerts</b> and <b>Other Alerts</b>.
            </TextListItem>
            <TextListItem>
              If there is no critical alert, the critical alert group will show
              empty state like this:
              <div style={{ maxWidth: `300px`, margin: `1rem 0` }}>
                <ImageEmptyState />
              </div>
            </TextListItem>
            <TextListItem>
              Both group lists will be expanded if there are some alerts in that
              group, and will be closed if there is no alert.
            </TextListItem>
          </TextList>
          Based on the background knowledges above, I implement the test cases
          as below.
          <TextList>
            <TextListItem>
              Create some mock data, including only 3 other alerts but don't
              have critical alert.
            </TextListItem>
            <TextListItem>
              For critical alert:
              <TextList>
                <TextListItem>
                  Check whether EmptyState component is in the React DOM tree,
                  should be TRUE.
                </TextListItem>
                <TextListItem>
                  Check whether the group is expanded, should be FALSE.
                </TextListItem>
              </TextList>
            </TextListItem>
            <TextListItem>
              For other alert:
              <TextList>
                <TextListItem>
                  Check whether the group is expanded, should be TRUE.
                </TextListItem>
                <TextListItem>
                  Check whether the count of alerts in this group is 3, should
                  be TRUE.
                </TextListItem>
              </TextList>
            </TextListItem>
          </TextList>
        </TextContent>
      </CardBody>
    </Card>
    <Card>
      <CardTitle>Integration test using Cypress in PatternFly</CardTitle>
      <CardBody></CardBody>
    </Card>
  </Layout>
)

export default TestPage
