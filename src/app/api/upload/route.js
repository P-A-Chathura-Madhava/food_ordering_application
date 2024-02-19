export async function POST(req) {
    const data = await req.formData();
    if (data.get("file")) {
        // console.log(data.get("file"));
        // apply save image

    }
    return Response.json(true);
}