import { Checkbox } from "@/components/ui/checkbox"

const SelectCard = () => {
  return (
    <div className='bg-zinc-950 h-full text-white'>
      <Checkbox className=" text-white" id="spade" />
      <label htmlFor="spade">King Spade</label>
    </div>
  )
}

export default SelectCard