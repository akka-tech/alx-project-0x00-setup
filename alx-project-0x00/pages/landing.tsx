import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="small" styles="text-sm rounded-sm" />
      <Button title="medium" styles="text-base rounded-md" />
      <Button title="Large" styles="text-lg rounded-lg" />
      <Button title="Large" styles="text-lg rounded-full" />
    </div>
  )
}
export default Landing