import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

function Bank() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const config = {
    public_key: "FLWPUBK_TEST-ed08fcc09d22e13c173bbebca18da272-X",
    tx_ref: `commissionsfunnels-${Date.now()}`,
    amount: 20000,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: user.email,
      phonenumber: user.phone,
      name: user.fullname,
    },
    customizations: {
      title: "registration payment for commissionsfunnels vendor",
      description: "registration payment for commissionsfunnels vendor",
      logo: "https://i.postimg.cc/76rWrcZV/logo.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div>
      <p className="text-yellow-500 text-sm my-4 text-center">
        Amount to Pay #20,000
      </p>
      <button
        className="bg-slate-900 text-yellow-500 p-3"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {
              //make api call to backend to verify payment and also make a user a vendor
            },
          });
        }}
      >
        Pay #20,000
      </button>
    </div>
  );
}

export default Bank;
