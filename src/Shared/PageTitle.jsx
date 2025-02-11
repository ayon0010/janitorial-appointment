const PageTitle = ({ heading, subHeading }) => {
    return (
        <div>
            <h1 className="inter 2xl:text-6xl xl:text-5xl text-4xl font-bold">{heading}</h1>
            <p className="2xl:text-xl xl:text-xl text-base font-normal mt-2">{subHeading}</p>
        </div>
    );
};

export default PageTitle;