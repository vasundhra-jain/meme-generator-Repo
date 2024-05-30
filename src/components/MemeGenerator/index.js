import {Component} from 'react'
import {
  Meme,
  Paragraph,
  Heading,
  MainContainer,
  FirstContainer,
  InputElement,
  LabelElement,
  SelectElement,
  CustomButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

const Item = props => {
  const {detail} = props
  const {displayText} = detail
  return <option value={displayText}>{displayText}</option>
}

class MemeGenerator extends Component {
  state = {
    url: '',
    top: '',
    bottom: '',
    font: parseInt(fontSizesOptionsList[0].displayText),
    show: false,
  }

  onChangeUrl = event => {
    this.setState({url: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({top: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottom: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({font: parseInt(event.target.value)})
  }

  onGenerate = () => {
    const {show} = this.state
    this.setState({show: !show})
  }

  render() {
    const {url, top, bottom, font, show} = this.state
    return (
      <MainContainer>
        <FirstContainer>
          <Heading>Meme Generator</Heading>
          <LabelElement htmlFor="imageUrl">Image Url</LabelElement>
          <InputElement
            id="imageUrl"
            type="text"
            onChange={this.onChangeUrl}
            value={url}
            placeholder="Enter the Image Url"
          />
          <LabelElement htmlFor="top">Top Text</LabelElement>
          <InputElement
            id="top"
            type="text"
            onChange={this.onChangeTopText}
            value={top}
            placeholder="Enter the Top Text"
          />
          <LabelElement htmlFor="bottom">Bottom text</LabelElement>
          <InputElement
            id="bottom"
            type="text"
            onChange={this.onChangeBottomText}
            value={bottom}
            placeholder="Enter the Bottom Text"
          />
          <LabelElement htmlFor="font">Font Size</LabelElement>
          <SelectElement
            onChange={this.onChangeFontSize}
            value={font}
            id="font"
          >
            {fontSizesOptionsList.map(each => (
              <Item detail={each} key={each.optionId} />
            ))}
          </SelectElement>
          <CustomButton type="button" onClick={this.onGenerate}>
            Generate
          </CustomButton>
        </FirstContainer>
        {show ? (
          <Meme bgImage={url} fontSize={font} data-testid="meme">
            <Paragraph>{top}</Paragraph>
            <Paragraph>{bottom}</Paragraph>
          </Meme>
        ) : (
          ''
        )}
      </MainContainer>
    )
  }
}

export default MemeGenerator
