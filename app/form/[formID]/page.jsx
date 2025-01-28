import MauticForm from  '../../components/MauticForm';

export default async function Page({params}) {
  const formID = await params.formID;
  console.log(formID);
  return (
    <div className="w-full py-8 bg-white">
    <MauticForm formID={formID} />
    </div>
  );
}