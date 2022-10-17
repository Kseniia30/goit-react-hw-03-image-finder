import { ProgressBar } from 'react-loader-spinner'

export const Loader = () => (
    <ProgressBar
        height="100"
        width="1200"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor = '#F4442E'
        barColor='#51E5FF' />
)