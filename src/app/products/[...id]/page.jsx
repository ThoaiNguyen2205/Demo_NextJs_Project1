"use client";
import { arrProduct } from "@/assets/data/data";
import { useRouter } from "next/navigation";
const ProductID = ({ params }) => {
  console.log(params);
  const router = useRouter();
  const { id } = params;
  const productDetail = arrProduct.find((item) => item.id == id);
  console.log("productDetail", productDetail);
  return (
    <section className="detail">
      <h1 className="text-center my-5">Thông tin chi tiết</h1>

      <div className="detail__content container">
        <div className="detail__item row">
          <div className="detail__item-img col-5">
            <img src={productDetail.image[0]} alt="" className="w-75" />
          </div>
          <div className="detail__item-info col-7">
            <h3>{productDetail.name}</h3>
            <p className="my-4">{productDetail.shortdesc}</p>
            <p className="fs-4 text-danger">{productDetail.price} VNĐ</p>
          </div>
        </div>
        <div className="detail__description mt-5">
          <h3>Mô tả</h3>
          <p>{productDetail.description}</p>
          <div className="detail__description-img text-center">
            <img src={productDetail.image[1]} alt="" className="w-75 my-3" />
            <img src={productDetail.image[2]} alt="" className="w-75 my-3" />
          </div>
        </div>
      </div>

      <h2 className="text-center my-5">Sản phẩm liên quan</h2>
      <section className="related">
        <div className="related__list row">
          {productDetail.relatedProducts.map((prodRelated, index) => {
            return (
              <div className="relatedd__item col-3 card m-3" key={index}>
                <img
                  src={prodRelated.image}
                  alt=""
                  className="related__item-img"
                />
                <div className="related__item-title card-body">
                  <h5>{prodRelated.name}</h5>
                  <p className="fw-bold text-danger">{prodRelated.price}</p>
                </div>
                <div className="related__item-footer card-footer d-flex justify-content-between">
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      router.push(`/products/${prodRelated.id}`);
                    }}
                  >
                    Xem chi tiết
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      router.push("/cart");
                    }}
                  >
                    Thêm giỏ hàng
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};
export default ProductID;
