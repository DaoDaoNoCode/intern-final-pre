import React from "react"

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
} from "@patternfly/react-core"
import ImageEmptyState from "../components/image-empty-state"
import "../styles/override.css"

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
          <Text>
            Based on the background knowledges above, I implement the test cases
            as below.
          </Text>
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
      <CardBody>
        <TextContent>
          <Text>
            Because there are some test cases for Notification Drawer in
            PatternFly, I only create some test cases to test accessibility of
            the components.
          </Text>
          <TextList>
            <TextListItem>
              When user press Enter key on the kebab toggle button in the
              header, check whether the dropdown menu is expanded and whether it
              focus on the first item in the menu.
            </TextListItem>
            <TextListItem>
              When user press Tab key, check whether the dropdown menu closes
              and it focus back to the kebab toggle button
            </TextListItem>
            <TextListItem>
              When user press Enter key on a closed group, check whether the
              group is expanded.
            </TextListItem>
            <TextListItem>
              When user press Enter key on a expanded group, check whether the
              group is closed.
            </TextListItem>
          </TextList>
        </TextContent>
      </CardBody>
    </Card>
  </Layout>
)

export default TestPage
