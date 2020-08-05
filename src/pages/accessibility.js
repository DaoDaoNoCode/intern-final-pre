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
  CardFooter,
} from "@patternfly/react-core"
import "../styles/override.css"

const AccessibilityPage = () => (
  <Layout index={2} pageSectionVariant={PageSectionVariants.default}>
    <SEO title="Accessibility" />
    <Card>
      <CardTitle>What is accessibility?</CardTitle>
      <CardBody>
        <Text>
          Web accessibility is the inclusive practice of ensuring there are no
          barriers that prevent interaction with, or access to, websites on the
          World Wide Web by people with physical disabilities, situational
          disabilities, and socio-economic restrictions on bandwidth and speed.
          When sites are correctly designed, developed and edited, generally all
          users have equal access to information and functionality.
        </Text>
      </CardBody>
      <CardFooter>--From Wikipedia</CardFooter>
    </Card>
    <Card>
      <CardTitle>What I implemented?</CardTitle>
      <CardBody>
        <TextContent>
          <Text>
            I implemented the keyboard events to make sure every button of the
            Notification Drawer can be accessible by keyboard.
          </Text>
          <TextList>
            <TextListItem>
              <b>In PatternFly: </b>
              <Text>
                Here is the{" "}
                <a
                  href="https://github.com/patternfly/patternfly-react/issues/4449"
                  target="_blank"
                  rel="noreferrer"
                >
                  issue
                </a>{" "}
                . How to solve it?
              </Text>
              <TextList>
                <TextListItem>
                  Add some keyboard events like pressing Enter key to click on
                  the item to solve the first problem.
                </TextListItem>
                <TextListItem>
                  <Text>
                    Fix the second problem that kebab toggle buttons on the
                    title cannot open dropdown menu by keyboard.
                  </Text>
                  <Text component={TextVariants.blockquote}>
                    This is not caused by the component itself, but caused by
                    the usage of the notification drawer. So I fixed this by
                    change the usage in the doc. At the same time, I simplify
                    the usage to make it more user-friendly when there are lot's
                    of kebab toggle buttons.
                  </Text>
                </TextListItem>
              </TextList>
              <TextListItem>
                <Text>
                  <b>In OpenShift:</b>
                </Text>
                <Text component={TextVariants.p}>
                  Except the accessibility functions above, I add a function
                  only for OpenShift. When user press Escape key, it will focus
                  back to the group title. (cannot demo it here because the PR
                  has not been merged yet)
                </Text>
              </TextListItem>
            </TextListItem>
          </TextList>
          <Text>
            <Link to="/test">
              Add test cases in both OpenShift and PatternFly.
            </Link>
          </Text>
        </TextContent>
      </CardBody>
    </Card>
  </Layout>
)

export default AccessibilityPage
