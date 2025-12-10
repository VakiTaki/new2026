import React, { useEffect, useMemo, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { getAuthInfo, noAnswer, yesAnswer } from "../services/apiService";

type UserInfo = {
  fullname?: string;
  participation?: boolean;
  completed?: boolean;
  qr?: string;
  token?: string;
};

const formatName = (name?: string) => name || "Гость";

const TokenlessNotice = () => (
  <div className="registration__empty">
    <h3>Предварительная регистрация</h3>
    <p style={{ marginBottom: "0px" }}>
      Перейдите по персональной ссылке из пригласительного письма, чтобы
      подтвердить участие.
    </p>
  </div>
);

const AnswerButtons = ({
  token,
  onYes,
  onNo,
}: {
  token: string | undefined;
  onYes: (body: { token?: string }) => void;
  onNo: (body: { token?: string }) => void;
}) => (
  <div className="registration__actions">
    <button className="btn primary" onClick={() => onYes({ token })}>
      Пойду
    </button>
    <button className="btn ghost" onClick={() => onNo({ token })}>
      Не пойду
    </button>
  </div>
);

const CompletedCard = ({
  user,
  onYes,
}: {
  user: UserInfo;
  onYes: (body: { token?: string }) => void;
}) => (
  <div className="registration__card">
    {user.participation ? (
      <>
        <h3>Ваш QR-код для входа</h3>
        <p className="registration__name">{formatName(user.fullname)}</p>
        {user.qr ? (
          <div className="qr-box">
            <QRCodeSVG value={user.qr} size={220} />
          </div>
        ) : (
          <p className="muted">QR не найден, обратитесь к организатору.</p>
        )}
      </>
    ) : (
      <>
        <p className="registration__name">{formatName(user.fullname)}</p>
        <p className="muted">Вы отказались от участия.</p>
        <button
          className="btn primary"
          onClick={() => onYes({ token: user.token })}
        >
          Всё-таки пойду
        </button>
      </>
    )}
  </div>
);

const PendingCard = ({
  user,
  onYes,
  onNo,
}: {
  user: UserInfo;
  onYes: (body: { token?: string }) => void;
  onNo: (body: { token?: string }) => void;
}) => (
  <div className="registration__card">
    <h3>Предварительная регистрация</h3>
    <p className="registration__name">{formatName(user.fullname)}</p>
    <AnswerButtons token={user.token} onYes={onYes} onNo={onNo} />
  </div>
);

export default function Registration() {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const hasToken = useMemo(() => Boolean(token), [token]);

  useEffect(() => {
    const url = new URL(window.location.href);
    const tokenFromUrl = url.searchParams.get("token");
    const stored = localStorage.getItem("token");

    if (tokenFromUrl) {
      setToken(tokenFromUrl);
      localStorage.setItem("token", tokenFromUrl);
      url.searchParams.delete("token");
      window.history.replaceState({}, document.title, url.toString());
    } else if (stored) {
      setToken(stored);
    }
  }, []);

  const fetchInfo = (body: { token?: string | null }) => {
    if (!body.token) return;
    setLoading(true);
    setError(null);
    getAuthInfo(body)
      .then((res) => setUser(res))
      .catch(() => setError("Не удалось получить данные. Попробуйте позже."))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    console.log(token);
    if (token) {
      fetchInfo({ token });
    }
  }, [token]);

  const handleYes = (body: { token?: string }) => {
    if (!body.token) return;
    setLoading(true);
    setError(null);
    yesAnswer(body)
      .then((res) => {
        if (res === 200) fetchInfo(body);
      })
      .catch(() => setError("Не удалось обновить статус. Попробуйте снова."))
      .finally(() => setLoading(false));
  };

  const handleNo = (body: { token?: string }) => {
    if (!body.token) return;
    setLoading(true);
    setError(null);
    noAnswer(body)
      .then((res) => {
        if (res === 200) fetchInfo(body);
      })
      .catch(() => setError("Не удалось обновить статус. Попробуйте снова."))
      .finally(() => setLoading(false));
  };

  return (
    <section id="registration" className="registration">
      <div className="section-header">
        <h2 className="section-title">Предварительная регистрация</h2>
        {/* <span className="badge">Доступ по персональной ссылке</span> */}
      </div>

      <div className="registration__layout card ">
        {loading && (
          <div className="registration__spinner">
            <div className="loader">
              <div className="face">
                <div className="circle" />
              </div>
              <div className="face">
                <div className="circle" />
              </div>
            </div>
            {/* <span className="muted">Загружаем данные...</span> */}
          </div>
        )}
        {/* {error && (
          <p className="muted" style={{ color: "#f4c2c2" }}>
            {error}
          </p>
        )} */}

        {user ? (
          <>
            {user ? (
              user.completed ? (
                <CompletedCard user={user} onYes={handleYes} />
              ) : (
                <PendingCard user={user} onYes={handleYes} onNo={handleNo} />
              )
            ) : (
              <p className="muted">Ожидаем данные по приглашению...</p>
            )}
          </>
        ) : (
          <TokenlessNotice />
        )}
      </div>
    </section>
  );
}
