import React from 'react'
import Header from '../header/Header'
import chat from "../../assets/images/need-help/chat-support.svg"
import gain from "../../assets/images/need-help/gain.png"
import step from "../../assets/images/need-help/step.png"
import styles from "./NeedHelp.module.scss";
import Card from './Card';

const needHelp=[{
  image:chat,
  text:"Get 24/7 chat support with our friendly customer service agents at your service.",header:"24/7 chat support with our customer Representatives "
},
{
  image:step,
  text:"Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean Separated they live in Bookmarks right at the coast.",
header:"Take your first step into safe, secure crypto investing"},
{
  image:gain,
  text:"Using our Frequently asked questions along with the categories gives you access to find answers to your possible questions and gather insightd",
header:"Gain More Insights to your questions"}
]
const NeedHelp = () => {

  return (
    <section>
      <article className='container md:pt-[152px] pt-[48px] px-[23px]'>
        <Header>Need Help?</Header>
        {needHelp.map((item,index)=>(
             <Card image={item.image} index={index} text={item.text} header={item.header}/>
        ))}
      </article>
    </section>
  )
}

export default NeedHelp