import Buttongroup2 from '../../molecules/Buttongroup2'

export default {
    title: "Molecules/Buttongroup2",
    component: Buttongroup2
}

const Template = args => <Buttongroup2 {...args} />

const buttonLeft = {
    text: "Concept",
    size: "medium",
    color: "#FFF",
    backgroundColor: "#000",    
}
const buttonRight = {
    text: "Participate",
    size: "medium",
    color: "#FFF",
    backgroundColor: "#000",    
}

export const Left = Template.bind({})
Left.args = {
   position: "left",
   buttonLeft: buttonLeft,
   buttonRight: buttonRight,
}

export const Center = Template.bind({})
Center.args = {
   position: "center",
   buttonLeft: buttonLeft,
   buttonRight: buttonRight,
}

export const Right = Template.bind({})
Right.args = {
   position: "right",
   buttonLeft: buttonLeft,
   buttonRight: buttonRight,
}