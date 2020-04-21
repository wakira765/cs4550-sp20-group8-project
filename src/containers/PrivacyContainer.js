import React, { Component } from "react";

class PrivacyContainer extends Component {

    render() {
        return(
            <>
            <div>
                <h1 className="about-header">Our Policies on Privacy</h1>
            </div>
            <div className="container">
                <div>
                    <h2>What Data Do We Collect?</h2>
                    <p>
                        The only information we collect from our users is the information they are willing to provide us.
                        We collect basic information such as name, date of birthday and email address and some more personal
                        information such as physical attributes and medical conditions.
                    </p>
                    <h2>Why We Need This Information</h2>
                    <p>
                        We allow our users to search drugs to better inform themselves. What separates us from similar services that already exist,
                        is the ability for the user to personalize a profile and share their experiences by commenting on a drug's page. By doing so,
                        users can determine the relevancy of other users' experiences based on similarity of their profiles. They may find people
                        who are physically similar to them have similar experiences. They may find people who are using a certain drug for a different
                        condition have vastly different experiences and may not be as good of a reference. To summarize, with this user information,
                        our users can better inform themselves of potential drug treatments through anecdotal information.
                    </p>
                    <h2>How the User Provides Us Information.</h2>
                    <p>
                        The information we collect is provided at the will of the user. When the user creates an account, the information they
                        put into their profile is considered public information. Users of our website have the option to stay anonymous by not
                        making an account or leave certain parts of their profile empty. Every part of a user's profile is voluntary to fill out
                        and should only be filled out if the user feels comfortable.
                    </p>
                    <h2>Our Privacy Norms</h2>
                    <p>
                        We consider the context of our information to be strictly private. No information on this site will be shared and made public
                        without the knowledge and consent of the user. The information we deal, the user's medical information, is sensitive and highly
                        personal. In this sense, we conside ourselves an online health service and take our users' privacy seriously.
                    </p>
                    <h2>Our Interests</h2>
                    <p>
                        We want to provide our users the best experience possible and to do that some data is necessary. The more willing users are to make a
                        detailed profile and share their information, the better our website becomes. In no way do we believe this is so valuable that it
                        requires violating our users privacy, but we hope our users understand by the very nature of our platform, the more users know about
                        each other, the better the service becomes. The more you know about the other user, the more you can weigh the relevancy of their
                        experience using a drug, to yours.
                    </p>
                    <h2>Full Disculosure of Third Party Services</h2>
                    <p>
                        Currently the only third party services we use are the drug information provided by the FDA and an API that provides us the news.
                        In both cases, the user's personal information are not required and are not shared with these services. Furthermore, both services
                        are not interested in the personal information we collect from the user. Therefore, our privacy policies are in no way influenced by
                        these services.
                    </p>
                    <h2>Monetization</h2>
                    <p>
                        There are plenty of ways this site can generate revenue by using the data we collect, but we do not. For example, some users may
                        choose to provide us their medical conditions. We could use this information to target ads about specific drugs that treat those
                        conditions. The same can be done by monitoring the search history of a user. If we find that the user has been searching recently
                        for medications that treat acne, we could direct ads in that way as well. However, this would expose our users' privacy and target
                        them to further ad tracking services. The information provided to us by the users will never be used for money generating services
                        such as advertisements.
                    </p>
                </div>
            </div>
            </>
        )
    }
}


export default PrivacyContainer;