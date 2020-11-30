import React from "react";
import MenuItem from "../menu-item/menu-item";

import "./directory.styles.scss";

interface IProps {}

type Section = { title: string; imageUrl: string; id: number };

interface IState {
  sections: Array<Section>;
}

class Directory extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",

          id: 4,
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",

          id: 5,
        },
      ],
    };
  }

  render(): JSX.Element {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id }) => (
          <MenuItem title={title} key={id} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}

export default Directory;
