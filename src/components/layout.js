/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import logo from "../images/logo_slim.png"
import avatar from "../images/avatar.jpg"
import {
  Drawer,
  DrawerContent,
  DrawerContentBody,
  Page,
  PageSection,
  PageHeader,
  PageHeaderTools,
  PageHeaderToolsGroup,
  PageHeaderToolsItem,
  NotificationBadge,
  Nav,
  NavList,
  NavItem,
  Brand,
  Title,
  Avatar,
  NotificationDrawer,
  DrawerPanelContent,
  NotificationDrawerHeader,
  NotificationDrawerBody,
  NotificationDrawerGroupList,
  NotificationDrawerGroup,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
} from "@patternfly/react-core"
import { BellIcon } from "@patternfly/react-icons"
import "./layout.css"
import { Link } from "gatsby"

const Layout = ({ children, index, pageSectionVariant }) => {
  const [activeItem, setItem] = React.useState(index)
  const [firstGroupExpanded, setFirstGroupExpanded] = React.useState(true)
  const [secondGroupExpanded, setSecondGroupExpanded] = React.useState(false)
  const [isDrawerExpanded, setDrawerExpanded] = React.useState(false)
  const [isRead, setRead] = React.useState("unread")

  const onNavSelect = result => {
    setItem(result.itemId)
  }

  const toggleFirstGroup = (event, value) => {
    setFirstGroupExpanded(value)
  }

  const toggleSecondGroup = (event, value) => {
    setSecondGroupExpanded(value)
  }

  const toggleDrawer = () => {
    setDrawerExpanded(!isDrawerExpanded)
    setRead("read")
  }

  const TopNav = (
    <Nav onSelect={onNavSelect} aria-label="Nav" variant="horizontal">
      <NavList>
        <NavItem itemId={0} isActive={activeItem === 0}>
          <Link to="/">Introduction</Link>
        </NavItem>
        <NavItem itemId={1} isActive={activeItem === 1}>
          <Link to="/implementation">Implementation</Link>
        </NavItem>
        <NavItem itemId={2} isActive={activeItem === 2}>
          <Link to="/accessibility">Accessibility</Link>
        </NavItem>
        <NavItem itemId={3} isActive={activeItem === 3}>
          <Link to="/test">Test</Link>
        </NavItem>
        <NavItem itemId={4} isActive={activeItem === 4}>
          Conclusion
        </NavItem>
      </NavList>
    </Nav>
  )

  const HeaderTools = (
    <PageHeaderTools>
      <PageHeaderToolsGroup>
        <PageHeaderToolsItem>
          <NotificationBadge
            aria-label="Notifications"
            variant={isRead}
            onClick={toggleDrawer}
          >
            <BellIcon />
          </NotificationBadge>
        </PageHeaderToolsItem>
      </PageHeaderToolsGroup>
      <PageHeaderToolsGroup>
        <PageHeaderToolsItem>
          <Title headingLevel="h4">Juntao's Final Pre</Title>
        </PageHeaderToolsItem>
        <PageHeaderToolsItem>
          <Avatar src={avatar} alt="avatar" />
        </PageHeaderToolsItem>
      </PageHeaderToolsGroup>
    </PageHeaderTools>
  )

  const Header = (
    <PageHeader
      logo={<Brand src={logo} alt="logo" />}
      headerTools={HeaderTools}
      topNav={TopNav}
    />
  )

  const patternflyPR = [
    {
      title: "#4319",
      desc: "docs(CONTRIBUTING.md): update the git workflow",
      link: "https://github.com/patternfly/patternfly-react/pull/4319",
      status: "success",
      time: "Merged Jun 8, 2020",
    },
    {
      title: "#4327",
      desc: "fix(docs): remove footer",
      link: "https://github.com/patternfly/patternfly-react/pull/4327",
      status: "success",
      time: "Merged Jun 8, 2020",
    },
    {
      title: "#4331",
      desc: "fix(Select): fix filter clear button accessibility issue",
      link: "https://github.com/patternfly/patternfly-react/pull/4331",
      status: "success",
      time: "Merged Jun 8, 2020",
    },
    {
      title: "#4340",
      desc: "fix(Select): fix panel issue",
      link: "https://github.com/patternfly/patternfly-react/pull/4340",
      status: "success",
      time: "Merged Jun 8, 2020",
    },
    {
      title: "#4352",
      desc: "fix(OptionsMenu): fix accessibility issue in plain with text",
      link: "https://github.com/patternfly/patternfly-react/pull/4352",
      status: "success",
      time: "Merged Jun 19, 2020",
    },
    {
      title: "#4353",
      desc: "fix(OverflowMenu): fix accessibility issue on KebabToggle button",
      link: "https://github.com/patternfly/patternfly-react/pull/4353",
      status: "success",
      time: "Merged Jun 8, 2020",
    },
    {
      title: "#4424",
      desc:
        "fix(OptionsMenu): fix accessibility bug in plain with text disabled part",
      link: "https://github.com/patternfly/patternfly-react/pull/4424",
      status: "success",
      time: "Merged Jun 25, 2020",
    },
    {
      title: "#4466",
      desc:
        "fix(NotificationDrawer): fix accessibility issues and add accessibility test cases",
      link: "https://github.com/patternfly/patternfly-react/pull/4466",
      status: "success",
      time: "Merged Jul 27, 2020",
    },
    {
      title: "#4587",
      desc:
        "feat(Drawer): enable users to define actions when they click outside the drawer panel",
      link: "https://github.com/patternfly/patternfly-react/pull/4587",
      status: "info",
      time: "Opened Jul 20, 2020",
    },
  ]

  const openshiftPR = [
    {
      title: "#5923",
      desc: "Integrate NotificationDrawer component from PatternFly",
      link: "https://github.com/openshift/console/pull/5923",
      status: "info",
      time: "Opened Jul 8, 2020",
    },
    {
      title: "#6169",
      desc:
        "Column Management Modal for Nodes Page, Projects Page and Namespaces Page",
      link: "https://github.com/openshift/console/pull/6169",
      status: "success",
      time: "Merged Aug 2, 2020",
    },
    {
      title: "#6193",
      desc:
        "Bug 1863402: Developer console tables show extra columns due to projects table columns change",
      link: "https://github.com/openshift/console/pull/6193",
      status: "info",
      time: "Opened Aug 3, 2020",
    },
  ]

  const onItemClick = (event, link) => {
    window.open(link, "top")
  }

  const panelContent = (
    <DrawerPanelContent>
      <NotificationDrawer>
        <NotificationDrawerHeader title="Pull Requests" />
        <NotificationDrawerBody>
          <NotificationDrawerGroupList>
            <NotificationDrawerGroup
              title="PatternFly PRs"
              isExpanded={firstGroupExpanded}
              count={patternflyPR.length}
              isRead
              onExpand={toggleFirstGroup}
            >
              <NotificationDrawerList isHidden={!firstGroupExpanded}>
                {patternflyPR.map((pr, index) => (
                  <NotificationDrawerListItem
                    key={index}
                    variant={pr.status}
                    onClick={event => onItemClick(event, pr.link)}
                  >
                    <NotificationDrawerListItemHeader
                      variant={pr.status}
                      title={`PatternFly PR${pr.title}`}
                    />
                    <NotificationDrawerListItemBody timestamp={pr.time}>
                      {pr.desc}
                    </NotificationDrawerListItemBody>
                  </NotificationDrawerListItem>
                ))}
              </NotificationDrawerList>
            </NotificationDrawerGroup>
            <NotificationDrawerGroup
              title="OpenShift PRs"
              isExpanded={secondGroupExpanded}
              count={openshiftPR.length}
              isRead
              onExpand={toggleSecondGroup}
            >
              <NotificationDrawerList isHidden={!secondGroupExpanded}>
                {openshiftPR.map((pr, index) => (
                  <NotificationDrawerListItem
                    key={index}
                    variant={pr.status}
                    onClick={event => onItemClick(event, pr.link)}
                  >
                    <NotificationDrawerListItemHeader
                      variant={pr.status}
                      title={`OpenShift PR${pr.title}`}
                    />
                    <NotificationDrawerListItemBody timestamp={pr.time}>
                      {pr.desc}
                    </NotificationDrawerListItemBody>
                  </NotificationDrawerListItem>
                ))}
              </NotificationDrawerList>
            </NotificationDrawerGroup>
          </NotificationDrawerGroupList>
        </NotificationDrawerBody>
      </NotificationDrawer>
    </DrawerPanelContent>
  )

  return (
    <Page header={Header}>
      <Drawer isExpanded={isDrawerExpanded}>
        <DrawerContent panelContent={panelContent}>
          <DrawerContentBody>
            <PageSection variant={pageSectionVariant}>{children}</PageSection>
          </DrawerContentBody>
        </DrawerContent>
      </Drawer>
    </Page>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
