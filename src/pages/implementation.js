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
import ImageResult from "../components/image-result"
import ImageH2 from "../components/image-h2"
import ImageH4 from "../components/image-h4"
import "../styles/override.css"

const ImplementationPage = () => (
  <Layout index={1} pageSectionVariant={PageSectionVariants.default}>
    <SEO title="Implementation" />
    <Card>
      <CardTitle>
        Let's have a look at the Notification Drawer in Openshift first
      </CardTitle>
      <CardBody>
        <ImageResult />
      </CardBody>
    </Card>
    <Card>
      <CardTitle>My method to implement it:</CardTitle>
      <CardBody>
        <TextContent>
          <TextList>
            <TextListItem>
              Compare the HTML code of Notification Drawer in PatternFly and
              OpenShift
            </TextListItem>
            <TextListItem>
              <Text>
                Find the relations between the components in these 2 products
                (left are components in OpenShift and right are components in
                PatternFly)
              </Text>
              <Text component={TextVariants.blockquote}>
                <b>NotificationDrawer</b> {"->"}{" "}
                <b>Drawer, DrawerContent, DrawerPanelContent</b>
                <br />
                <b>NotificationDrawerHeading</b> {"->"}{" "}
                <b>
                  NotificationDrawer, NotificationDrawerHeader,
                  NotificationDrawerBody, NotificationDrawerGroupList
                </b>
                <br />
                <b>NotificationCategory</b> {"->"}{" "}
                <b>NotificationDrawerGroup, NotificationDrawerList</b>
                <br />
                <b>NotificationEntry</b> {"->"}{" "}
                <b>NotificationDrawerListItem</b>
                <br />
              </Text>
            </TextListItem>
            <TextListItem>
              Replace the OpenShift Notification Drawer components with above
              components in PatternFly
            </TextListItem>
            <TextListItem>
              <Text>
                Find the difference between the styles and override them in
                OpenShift
              </Text>
              <Text component={TextVariants.blockquote}>
                For example, the header of the notifications in OpenShift uses{" "}
                {"<h4>"} tag in OpenShift. However, it uses {"<h2>"} tag in
                PatternFly. When we simply replace the components without
                overriding the styles, it looks like this:
                <div style={{ maxWidth: `600px`, margin: `1rem 0` }}>
                  <ImageH2 />
                </div>
                The font size of the notification title is very large, which
                looks not good. After overriding the styles, it looks like this,
                which is the same as original one.
                <div style={{ maxWidth: `600px`, margin: `1rem 0` }}>
                  <ImageH4 />
                </div>
              </Text>
            </TextListItem>
            <TextListItem>
              <Link to="/accessibility">
                Implement the accessibility functions of Notification Drawer
              </Link>
            </TextListItem>
          </TextList>
        </TextContent>
      </CardBody>
    </Card>
  </Layout>
)

export default ImplementationPage
