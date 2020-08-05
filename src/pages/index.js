import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Text,
  TextContent,
  TextListItem,
  TextList,
  PageSectionVariants,
  Card,
  CardTitle,
  CardBody,
} from "@patternfly/react-core"
import { Link } from "gatsby"
import "../styles/override.css"

const IndexPage = () => (
  <Layout index={0} pageSectionVariant={PageSectionVariants.default}>
    <SEO title="Introduction" />
    <Card>
      <CardTitle> Introduction to my work in this summer</CardTitle>
      <CardBody>
        <TextContent>
          <TextList>
            <TextListItem>
              Fix some bugs and implement some functions in PatternFly. Add
              accessibility functions and test cases for the components I worked
              on.
            </TextListItem>
            <TextListItem>
              <Link to="/implementation">
                Integrate Notification Drawer from PatternFly into OpenShift.
              </Link>
            </TextListItem>
            <TextListItem>
              Implement the column management feature for several pages in
              OpenShift.
            </TextListItem>
            <TextListItem>
              Help non-UXD team members onboard to develop with PatternFly
              React.
            </TextListItem>
            <TextListItem>
              Present on PatternFly community meeting and OpenShift sprint.
            </TextListItem>
          </TextList>
        </TextContent>
      </CardBody>
    </Card>
    <Card>
      <CardTitle>The project I want to talk about in detail today</CardTitle>
      <CardBody>
        <TextContent>
          <Text>
            The project is about the Notification Drawer component in both
            OpenShift and PatternFly. And in this project I did the following
            things.
          </Text>
          <TextList>
            <TextListItem>In OpenShift: </TextListItem>
            <TextList>
              <TextListItem>
                Integrate the Notification Drawer component from PatternFly into
                OpenShift.
              </TextListItem>
              <TextListItem>Override some styles in OpenShift.</TextListItem>
              <TextListItem>Add some accessibility functions.</TextListItem>
              <TextListItem>
                Create some test cases for unit tests. (use Jest and Enzyme)
              </TextListItem>
            </TextList>
            <TextListItem>In PatternFly: </TextListItem>
            <TextList>
              <TextListItem>
                Fix some accessibility issues and Add some accessibilty
                functions.
              </TextListItem>
              <TextListItem>
                Simplify the usage of the Notification Drawer in the doc.
              </TextListItem>
              <TextListItem>
                Create some test cases for integration tests. (use Cypress)
              </TextListItem>
            </TextList>
          </TextList>
        </TextContent>
      </CardBody>
    </Card>
  </Layout>
)

export default IndexPage
