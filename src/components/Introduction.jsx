import { TypeAnimation } from 'react-type-animation'

const Introduction = () => {
  return (
    <TypeAnimation
      splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
      sequence={[
        'Hi, my name is Christine Maynard and I am a Software Engineer at Citigroup',
        35000,
        '',
      ]}
      speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
      omitDeletionAnimation={true}
      style={{
        fontSize: '1em',
        // display: 'block',
        minHeight: '200px',
      }}
      repeat={1}
    />
  )
}

export default Introduction
