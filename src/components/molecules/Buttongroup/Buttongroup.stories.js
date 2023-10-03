import Buttongroup from '../../molecules/Buttongroup'

export default {
    title: "Molecules/Buttongroup",
    component: Buttongroup
}

const Template = args => <Buttongroup {...args} />

const buttonLeft = {
    text: "Training",
    size: "medium",
    color: "#FFF",
    backgroundColor: "#000",    
}
const buttonMiddle = {
    text: "News",
    size: "medium",
    color: "#FFF",
    backgroundColor: "#000",    
}
const buttonRight = {
    text: "Information",
    size: "medium",
    color: "#FFF",
    backgroundColor: "#000",    
}



export const Left = Template.bind({})
Left.args = {
   position: "left",
   buttonLeft: buttonLeft,
   buttonMiddle: buttonMiddle,
   buttonRight: buttonRight,
}

export const Center = Template.bind({})
Center.args = {
   position: "center",
   buttonLeft: buttonLeft,
   buttonMiddle: buttonMiddle,
   buttonRight: buttonRight,
}

export const Right = Template.bind({})
Right.args = {
   position: "right",
   buttonLeft: buttonLeft,
   buttonMiddle: buttonMiddle,
   buttonRight: buttonRight,
}