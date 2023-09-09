export const DELETE = async (request, { params }) => {
  

  try {
    const { id } = params;
    const { email } = await request.json();

    if (!id || !email) {
      return NextResponse.json({ message: "Missing ID or  Email" }, { status: 400 });
    }

    await connect();

    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    const followIndex = User.followers.findIndex((follow) => follow.email === email);
    if (followIndex === -1) {
      return NextResponse.json({ message: "Comment not found" }, { status: 404 });
    }

    User.followers.splice(followIndex, 1);
    await User.save();

    return NextResponse.json({ message: 'UnFollow' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      		{ message: 'Internal server error' },
      		{ status: 500 }
      	);
  }