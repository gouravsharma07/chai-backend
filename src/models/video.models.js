import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    vikdeoFile: {
        type: String, // Cloudinary public_id
        required: true
    },
    thambnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    view: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

videoSchema.plugin(mongooseAggregatePaginate)

const Vlideo = mongoose.model("Video", videoSchema)