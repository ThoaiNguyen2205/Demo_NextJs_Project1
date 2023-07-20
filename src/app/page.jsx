"use client";

import { useRouter } from "next/navigation";

import { arrProduct } from "@/assets/data/data";
export default function Home() {
  const router = useRouter();
  return (
    <main className="product container mt-5">
      <h2 className="product__title text-center my-5">Danh sách sản phẩm</h2>
      <div className="product__list row p-2">
        {arrProduct.map((prod, index) => {
          return (
            <div
              className="product__item col-lg-3 col-md-4 col-sm-6 card"
              key={index}
            >
              <img src={prod.image[0]} alt="" className="product__item-img" />

              <div className="product__item-title card-body">
                <h5>{prod.name}</h5>
                <p className="text-danger fw-bold">{prod.price} VNĐ</p>
              </div>
              <div className="product__item-footer card-footer d-flex justify-content-between">
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    router.push(`/products/${prod.id}`);
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
    </main>
  );
}
