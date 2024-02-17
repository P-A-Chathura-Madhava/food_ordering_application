function MenuItem() {
  return (
    <div className="p-4 text-center transition-all bg-gray-200 rounded-lg hover:bg-white group hover:shadow-md hover:shadow-black/25">
      <div className="text-center">
        <img className="block mx-auto max-h-auto max-h-24 max-w-auto" src="/biriyani.png" alt="rice" />
      </div>
      <h4 className="my-3 text-xl font-semibold">Chicken Biriyani</h4>
      <p className="text-sm text-gray-500">
        Biryani is a mixed rice dish most popular in South Asia and was thought
        to have originated from ancient Iran. It is made with rice, some type of
        meat and spices.
      </p>
      <button className="px-8 py-2 mt-4 text-white rounded-full bg-primary">
        Add to cart Rs. 1089.00
      </button>
    </div>
  );
}

export default MenuItem;
