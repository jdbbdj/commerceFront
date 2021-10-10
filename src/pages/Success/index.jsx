import React from 'react'
import { SuccessContainer, SuccessDesc, SuccessIcon } from './SuccessElements'

const Success = () => {
    return (
        <SuccessContainer>
            <SuccessIcon src="data:image/jpeg;base64,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"/>
            <SuccessDesc>
                Thank you for using Kay'U services.<br/> Hoping for our other future transactions.
            </SuccessDesc>
        </SuccessContainer>
    )
}

export default Success
