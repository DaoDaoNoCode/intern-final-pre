import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Text,
  TextVariants,
  TextContent,
  TextListItem,
  TextList,
  Brand,
  Divider,
  Flex,
  PageSectionVariants,
} from "@patternfly/react-core"
import "../styles/index.css"
import pfLogo from "../images/pfLogo.svg"
import osLogo from "../images/osLogo.svg"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout index={0} pageSectionVariant={PageSectionVariants.light}>
    <SEO title="Introduction" />
    <TextContent>
      <Text component={TextVariants.h1}>
        Introduction to my work in this summer
      </Text>
      <TextList>
        <TextListItem>
          Fix some bugs and Implement some functions in PatternFly. Add
          accessibility and test cases for the components I worked on.
        </TextListItem>
        <TextListItem>
          <Link to="/implementation">
            Integrate Notification Drawer from PatternFly into OpenShift.
          </Link>
        </TextListItem>
        <TextListItem>
          Implement the column management modal for several pages in OpenShift.
        </TextListItem>
        <TextListItem>
          Help onboard non-UXD team members onto PatternFly.
        </TextListItem>
        <TextListItem>
          Present on PatternFly community meeting and OpenShift sprint.
        </TextListItem>
      </TextList>
      <Text component={TextVariants.h1}>
        The project I want to talk about in detail today
      </Text>
      <Text component={TextVariants.p}>
        The project is about the Notification Drawer component in both OpenShift
        and PatternFly. And in this project I did the following things.
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
            Fix some accessibility issues and Add some accessibilty functions.
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
    <Flex className="logo-box">
      <Brand src={pfLogo} alt="Patternfly Logo" />
      <Divider isVertical />
      <Brand src={osLogo} alt="Openshift Logo" />
    </Flex>
  </Layout>
)

export default IndexPage
