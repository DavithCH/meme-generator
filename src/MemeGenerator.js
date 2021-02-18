import React from 'react'
import './MemeGenerator.css'

class MemeGenerator extends React.Component {
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText:"",
            randomImg: "https://i.imgflip.com/1o00in.jpg",
            allMemeImage:[]
        }
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data  
            console.log(memes);
            this.setState({
                allMemeImage:memes
            })
        })
        
    }
    

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImage.length)
        const randMemeImg = this.state.allMemeImage[randNum].url
        this.setState({randomImg: randMemeImg})
        console.log(randMemeImg)
    }

    render(){
        return (
            <div className="header">
                <form className="meme__form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />

                    <button>Generate</button>
    
                </form>

                <div 
                    className="meme"
                    >
                    <img src={this.state.randomImg} alt=""/>
                    <h1 id="top__text">{this.state.topText}</h1>
                    <h1 id="bottom__text">{this.state.bottomText}</h1>
                </div>
            </div>
        )
    }
    
}

export default MemeGenerator
