import React, { Component } from "react";
import SortableTree, { toggleExpandedForAll } from "react-sortable-tree";

import FileExplorerTheme from "react-sortable-tree-theme-file-explorer";

import { Button } from "reactstrap";

class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: "",
      searchFocusIndex: 0,
      searchFoundCount: null,
      treeData: [
        { title: ".gitignore" },
        { title: "package.json" },
        {
          title: "src",
          isDirectory: true,
          expanded: true,
          children: [
            { title: "styles.css" },
            { title: "index.js" },
            { title: "reducers.js" },
            { title: "actions.js" },
            { title: "utils.js" },
          ],
        },
        {
          title: "tmp",
          isDirectory: true,
          children: [
            { title: "12214124-log" },
            { title: "drag-disabled-file", dragDisabled: true },
          ],
        },
        {
          title: "build",
          isDirectory: true,
          children: [{ title: "react-sortable-tree.js" }],
        },
        {
          title: "public",
          isDirectory: true,
        },
        {
          title: "node_modules",
          isDirectory: true,
        },
      ],
    };

    this.updateTreeData = this.updateTreeData.bind(this);
    this.expandAll = this.expandAll.bind(this);
    this.collapseAll = this.collapseAll.bind(this);
  }

  updateTreeData(treeData) {
    this.setState({ treeData });
  }

  expand(expanded) {
    this.setState({
      treeData: toggleExpandedForAll({
        treeData: this.state.treeData,
        expanded,
      }),
    });
  }

  expandAll() {
    this.expand(true);
  }

  collapseAll() {
    this.expand(false);
  }

  render() {
    const { treeData, searchString, searchFocusIndex } = this.state;

    return (
      <div style={{ display: "flex", flexDirection: "column", height: "400px" }}>
        <div className="p-3">
          <Button color="secondary" size="sm" onClick={this.expandAll}>
            Expand All
          </Button>{" "}
          <Button color="secondary" size="sm" onClick={this.collapseAll}>
            Collapse All
          </Button>
        </div>

        <div>
          <SortableTree theme={FileExplorerTheme} treeData={treeData} onChange={this.updateTreeData}
            searchQuery={searchString} searchFocusOffset={searchFocusIndex}
            searchFinishCallback={(matches) =>
              this.setState({
                searchFoundCount: matches.length,
                searchFocusIndex:
                  matches.length > 0 ? searchFocusIndex % matches.length : 0,
              })
            }
            canDrag={({ node }) => !node.dragDisabled}
            canDrop={({ nextParent }) => !nextParent || nextParent.isDirectory}
            generateNodeProps={(rowInfo) => ({
              icons: rowInfo.node.isDirectory
                ? [
                    <div
                      style={{
                        borderLeft: "solid 8px gray",
                        borderBottom: "solid 10px gray",
                        marginRight: 10,
                        boxSizing: "border-box",
                        width: 16,
                        height: 12,
                        filter: rowInfo.node.expanded
                          ? "drop-shadow(1px 0 0 gray) drop-shadow(0 1px 0 gray) drop-shadow(0 -1px 0 gray) drop-shadow(-1px 0 0 gray)"
                          : "none",
                        borderColor: rowInfo.node.expanded ? "white" : "gray",
                      }}/>,
                  ]
                : [
                    <div
                      style={{
                        border: "solid 1px black",
                        fontSize: 8,
                        textAlign: "center",
                        marginRight: 10,
                        width: 12,
                        height: 16,
                      }}>
                      F
                    </div>,
                  ],
            })}/>
        </div>
      </div>
    );
  }
}

export default Demo;
