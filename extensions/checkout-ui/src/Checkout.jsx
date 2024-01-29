import React, { useState } from 'react';
import {
  Button,
  reactExtension,
  View,
  Modal,
  BlockSpacer,  
  Icon,
  Form,
  Grid,
  TextField,
  useApplyAttributeChange,
  useAttributeValues
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension(
  "purchase.checkout.payment-method-list.render-after",
  () => <CustomNotes />
);

function CustomNotes() {
  const [custominfo] =
    useAttributeValues([
      'my custom info'
    ]);
const [customInfo,setCustomInfo] = useState("")
const applyAttributeChange = useApplyAttributeChange();
  const submitHandler = async () => {
    const result = await applyAttributeChange({
      key: 'my custom info',
      type: 'updateAttribute',
      value: customInfo,
    });
    console.log(
      'applyAttributeChange result',
      result,
    );
    
  }
  return (
    <View padding="base" border="base">
      <Button
        overlay={
          <Modal id="my-modal" padding title="Custom info">
            
            <Form onSubmit={() => submitHandler()}>
              <Grid columns={["50%", "50%"]} spacing="base">
                <View>
                  <TextField label="Custom Note" id="custominfo" name="custominfo" value={custominfo} onChange={(data)=> setCustomInfo(data)}/>
                </View>
              </Grid>
              <BlockSpacer spacing="base" />
              <Button accessibilityRole="submit">Submit</Button>
            </Form>
          </Modal>
        }
      >
        <Icon source="discount" /> Click On Me
      </Button>
    </View>
  );
}
