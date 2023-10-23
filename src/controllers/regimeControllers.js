import Regime from "../models/regimeModel.js";

export async function getAllRegimePlans(req, res) {
  try {
    const data = await Regime.find({});
    res.json({ data: data });
  } catch (error) {
    console.log(error);
  }
}
export async function addRegimePlan(req, res) {
  const { name, description } = req.body;
  const newPlan = new Regime({
    name: name,
    description: description,
  });
  try {
    await newPlan.save();
    res.json({ message: "New plan have been created" });
  } catch (error) {
    console.log(error);
  }
}
export async function updateRegimePlan(req, res) {
  const { id, name, description } = req.body;
  try {
    await Regime.findOneAndUpdate(
      { _id: id },
      { name: name, description: description }
    );
    res.json({message: 'Plan has been updated'})
  } catch (error) {
    console.log(error);
  }
}
export async function removeRegimePlan(req,res){
    const id = req.body.id
    try {
        await Regime.findOneAndDelete({_id: id})
        res.json({message: 'Deleted Successfuly'})
    } catch (error) {
            console.log(error)
    }
}