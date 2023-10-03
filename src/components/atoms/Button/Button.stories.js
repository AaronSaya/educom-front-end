import Button from '../Button'

export default {
    title: "Atoms/Button",
    component: Button
}

const Template = args => <Button {...args} />

export const Concept = Template.bind({})
Concept.args = {
    size: "medium",
    text: "Concept",
    backgroundColor: "#58AAE1" ,
    color: "#FFF",
    type: "primary"
}

export const Participant = Template.bind({})
Participant.args = {
    size: "medium",
    text: "Participate",
    backgroundColor: "#7F4690" ,  
    color: "#FFF",
    type: "secondary"
}

export const BarButton = Template.bind({})
BarButton.args = {
    size: "medium",
    text: "News",
    backgroundColor: "#000" ,
    color: "#FFF",
    type: "tertiary"
}