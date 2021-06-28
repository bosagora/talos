import React from 'react';
import { steps } from "./static"

import { withStepsState } from "../steps/Container"
import { withSecretSeed } from "../secretSeed/Container"
import { withNetworkOptions } from "../networkOptions/Container"
import { withBanManagement } from "../banManagement/Container"
import { withAdministrativeInterface } from "../administrativeInterface/Container"

import ButtonToNextStep from "../items/controls/buttonToNextStep"
import NextButton from "../items/static/nextButton"
import ButtonRequest from "../request/buttonRequest"

const NextStepControl = props => {
  const { currentIndex } = props

  switch (currentIndex) {
    case steps.secretSeed:
      return <ButtonToNextStep
        items={props.secretSeed.stepItems}
        handleChange={props.onChangeSecretSeedItems}
      >
        <NextButton>Next step</NextButton>
      </ButtonToNextStep>

    case steps.networkOptions:
      return <ButtonToNextStep
        items={props.networkOptions.stepItems}
        handleChange={props.onChangeNetworkOptionsItems}
      >
        <NextButton>Next step</NextButton>
      </ButtonToNextStep>

    case steps.banManagement:
      return <ButtonToNextStep
        items={props.banManagement.stepItems}
        handleChange={props.onChangeBanManagementItems}
      >
        <NextButton>Next step</NextButton>
      </ButtonToNextStep >

    case steps.administrativeInterface:
      return <ButtonRequest>
        <NextButton>Start</NextButton>
      </ButtonRequest>

    default:
      return null
  }

}

export default withStepsState(withSecretSeed(withNetworkOptions(withBanManagement(withAdministrativeInterface(NextStepControl)))))
