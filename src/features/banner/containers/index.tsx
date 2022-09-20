import { ReactElement } from "react";

import Banner from "features/banner/components/banner";

const BannerContainer: React.FC = (): ReactElement<any, any> => {
    const name = "Amey Bairolu";
    const skills = ["Front-end Web Developer", "Web Designer", "UI/UX Designer"];
    const description =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fuga temporibus, nihil voluptate at architecto! Dignissimos praesentium excepturi, earum minus molestiae quo rerum porro saepe voluptas eligendi non tempora. Minus!";

    return <Banner name={name} skills={skills} description={description} />;
};

export default BannerContainer;
