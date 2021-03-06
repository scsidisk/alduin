import * as React from "react";

import { CustomComponent } from "./custom-component";
import { ComponentsRefs } from "./../components-refs";
import { AddFeedOpenModalButton } from "./button/add-feed-open-modal-button";
import { ConfigOpenModalButton } from "./button/config-open-modal-button";
import { PinSidebarButton } from "./button/pin-sidebar-button";
import { FeedList } from "./feed/feed-list";
import { FetchButton } from "./button/fetch-button";
import { TrashButton } from "./button/trash-button";

export class Sidebar extends CustomComponent<{}, {}> {

    constructor() {
        super();

        ComponentsRefs.sidebar = this;
    }

    render() {
        return (
            <div className="rss menu pinned">
                <FeedList />
                <ul className="rss settings">
                    <AddFeedOpenModalButton /><FetchButton /><TrashButton /><ConfigOpenModalButton /><PinSidebarButton />
                </ul>
            </div>
        );
    }

    togglePin() {
        document.querySelector("body").classList.toggle("pinned");
    }
}
