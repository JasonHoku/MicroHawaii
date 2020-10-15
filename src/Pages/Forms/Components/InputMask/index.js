import React, {Fragment} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../../Layout/AppMain/PageTitle';

// Examples

import FormInputMaskExample from './Examples/example1';

class FormInputMask extends React.Component {

    render() {
        return (
            <Fragment>
                <PageTitle
                    heading="Input Mask"
                    subheading="Add all kind of input masks for inputs for a better user experience."
                    icon="pe-7s-global icon-gradient bg-happy-itmeo"
                />
                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <FormInputMaskExample/>
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}

export default FormInputMask;