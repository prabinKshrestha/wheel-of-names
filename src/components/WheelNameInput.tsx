import { Button, Card, TextInput } from "flowbite-react";
import { WheelNameAddFunction, WheelNameDeleteFunction, WheelNameType, WheelNameUpdateFunction } from "../types/wheel-name";

type WheelInputProps = {
    wheelNames: ReadonlyArray<WheelNameType>,
    onWheelNameAdd: WheelNameAddFunction,
    onWheelNameUpdate: WheelNameUpdateFunction,
    onWheelNameDelete: WheelNameDeleteFunction,
}

export default function WheelNameInput({
    wheelNames,
    onWheelNameAdd,
    onWheelNameUpdate,
    onWheelNameDelete,
}: WheelInputProps) {
    return (
        <div className="w-96">
            <Button className="mb-8 rounded-md" onClick={() => onWheelNameAdd()}>Add Wheel Name</Button>
            {
                wheelNames.length
                    ? wheelNames.map((name, index) => {
                        return (
                            <div className="w-full flex items-center gap-4 my-4">
                                <TextInput
                                    type="text"
                                    className="rounded-md"
                                    onChange={(e) => onWheelNameUpdate(e.target.value, index)}
                                    value={name}
                                    required
                                />
                                <Button
                                    color="failure"
                                    className="rounded-md"
                                    onClick={() => onWheelNameDelete(index)}
                                >
                                    Remove
                                </Button>
                            </div>
                        )
                    })
                    : <div>No Names Found</div>
            }
        </div>
    );
}