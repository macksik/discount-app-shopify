import React, { useState, useCallback } from 'react';
import {
  Page,
  Layout,
  Card,
  Form,
  FormLayout,
  ColorPicker,
  RangeSlider,
  Select,
  Text,
  AppProvider,
  TextField,
  Divider,
  Button
} from '@shopify/polaris';

const DiscountApp = () => {
  // State for Bar section
  const [rangeValue, setRangeValue] = useState(32);
  const [selectedPosition, setSelectedPosition] = useState('top');
  const [colorBar, setColorBar] = useState('#000000');

  // State for Text section
  const [rangeValueFS, setRangeValueFS] = useState(14);
  const [rangeValueFW, setRangeValueFW] = useState(14);
  const [colorText, setColorText] = useState('#fff');

  // State for Button section
  const [rangeValueBR, setRangeValueBR] = useState(12);
  const [colorButtonBackground, setColorButtonBackground] = useState('#000000');
  const [colorButtonColor, setColorButtonColor] = useState('#fff');
  const [textInputValue, setTextInputValue] = useState('');

  // Callback functions
  const handleRangeSliderChange = useCallback((value) => setRangeValue(value), []);
  const handleRangeSliderChangeFS = useCallback((value) => setRangeValueFS(value), []);
  const handleRangeSliderChangeFW = useCallback((value) => setRangeValueFW(value), []);
  const handleRangeSliderChangeBR = useCallback((value) => setRangeValueBR(value), []);
  const handleSelectChangePosition = useCallback((value) => setSelectedPosition(value), []);
  const handleTextInputChange = useCallback((value) => setTextInputValue(value), []);

  // Options for Position select
  const optionsPosition = [
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

    // Function to handle form submission
    const handleSubmit = () => {
      // You can perform any logic here before submitting the form
      // For now, let's just log the form data
      console.log({
        rangeValue,
        selectedPosition,
        colorBar,
        rangeValueFS,
        rangeValueFW,
        colorText,
        rangeValueBR,
        colorButtonBackground,
        colorButtonColor,
        textInputValue,
      });

      // Simulate a form submission by setting isSubmitting to false after a delay
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    };

  

  return (
    <AppProvider>
      <Page>
        <Layout>
          <Layout.Section>
            <Card>
              <Form onSubmit={handleSubmit}>
                <FormLayout>

                  {/* Bar Section */}
                  <Text as="h2" variant="headingMd">Bar</Text>
                  <Text as="p" variant="bodySmall">Background</Text>
                  <ColorPicker onChange={setColorBar} color={colorBar} />
                  <RangeSlider label="Padding" value={rangeValue} onChange={handleRangeSliderChange} />
                  <TextField label="Padding Value" value={rangeValue.toString()} readOnly />
                  <Select label="Position" options={optionsPosition} onChange={handleSelectChangePosition} value={selectedPosition} />
                  <Divider borderColor="border-inverse" />

                  {/* Text Section */}
                  <Text as="h2" variant="headingMd">Text</Text>
                  <Text as="p" variant="bodySmall">Color</Text>
                  <ColorPicker onChange={setColorText} color={colorText} />
                  <RangeSlider label="Font-size" value={rangeValueFS} onChange={handleRangeSliderChangeFS} />
                  <TextField label="Font-size Value" value={rangeValueFS.toString()} readOnly />
                  <RangeSlider label="Font-weight" value={rangeValueFW} onChange={handleRangeSliderChangeFW} />
                  <TextField label="Font-weight Value" value={rangeValueFW.toString()} readOnly />
                  <Divider borderColor="border-inverse" />

                  {/* Button Section */}
                  <Text as="h2" variant="headingMd">Button</Text>
                  <Text as="p" variant="bodySmall">Background</Text>
                  <ColorPicker onChange={setColorButtonBackground} color={colorButtonBackground} />
                  <Text as="p" variant="bodySmall">Color</Text>
                  <ColorPicker onChange={setColorButtonColor} color={colorButtonColor} />
                  <TextField label="Custom Text" value={textInputValue} onChange={handleTextInputChange} />
                  <RangeSlider label="Border-radius" value={rangeValueBR} onChange={handleRangeSliderChangeBR} />
                  <TextField label="Border-radius Value" value={rangeValueBR.toString()} readOnly />
                  <Divider borderColor="border-inverse" />


                  <Button fullWidth submit loading={isSubmitting}>
                    Submit
                  </Button>
                </FormLayout>
              </Form>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </AppProvider>
  );
};

export default DiscountApp;
